import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { addToOrders, clearCart } from "@/queries/users";
import { createProduct } from "@/queries/products";
import dbConnect from "@/lib/mongo";
import { auth } from "@/auth";
import mongoose from "mongoose";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const POST = auth(async function POST(req) {
    const authSession = await auth()
    const userId = authSession?.user.id
    const body = await req.text();
    const signature = headers().get('Stripe-Signature')

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        )
    } catch (error) {
        return new NextResponse("invalid signature", { status: 400 })
    }

    const session = event.data.object

    if (event.type === "checkout.session.completed") {
        console.log('session', session)

        try {

            await dbConnect();

            const lineItems = await stripe.checkout.sessions.listLineItems(
                session.id
            );

            const createdAt = (new Date(session.created * 1000)).toLocaleDateString()

            console.log("Database connected");
            console.log(session)

            const newOrder = {
                id: new mongoose.Types.ObjectId(),
                sessionId: session.id,
                amountTotal: session.amount_total,
                userId: session.metadata.userId,
                products: lineItems,
                createdAt: createdAt
            }

            const user = await addToOrders(session.metadata.userId, newOrder);
            const newUser = await clearCart(session.metadata.userId);
            // console.log("Fetched cart:", cart);
            console.log(session)

            return new NextResponse(JSON.stringify(user), {
                status: 200
            });
        } catch (error) {
            console.error("Error:", error);
            return new NextResponse(error.message, {
                status: 500
            });
        }
    }

    if (event.type === "price.created") {
        // console.log('session', session)

        try {

            await dbConnect();


            console.log("Database connected");
            console.log(session)

            // const price = await stripe.prices.retrieve(session.id);

            const productDetails = await stripe.products.retrieve(session.product);

            const newProduct = {
                prodId: productDetails.id,
                createdAt: productDetails.created,
                active: productDetails.active,
                name: productDetails.name,
                description: productDetails.description,
                priceId: session.id,
                price: session.unit_amount,
                featured: productDetails.metadata.featured,
                breed: productDetails.metadata.breed
            }

            const product = await createProduct(newProduct);


            return new NextResponse(JSON.stringify(product), {
                status: 200
            });
        } catch (error) {
            console.error("Error:", error);
            return new NextResponse(error.message, {
                status: 500
            });
        }
    }

    return new NextResponse("ok", { status: 200 })
})