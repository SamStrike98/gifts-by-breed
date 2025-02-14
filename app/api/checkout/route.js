import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const POST = auth(async function POST(request) {
    if (request.auth?.user) {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        const authSession = await auth()

        try {
            let data = await request.json();
            let products = data.products;
            let lineItems = products.map(product => ({
                price: product.priceId,
                quantity: 1
            }));


            const session = await stripe.checkout.sessions.create({
                line_items: lineItems,
                mode: 'payment',
                success_url: `${process.env.URL}/cart/order-complete/session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.URL}/cart/${authSession?.user.id}`,
                metadata: {
                    userId: authSession?.user.id,
                    // products: products
                }
            });

            console.log("Session URL:", session.url);
            return NextResponse.json({ url: session.url }); // Return JSON with URL
        } catch (error) {
            console.error("Error creating Stripe checkout session:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: "Not authorized" }, { status: 401 })
    }


})