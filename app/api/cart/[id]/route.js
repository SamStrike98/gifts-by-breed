import { NextResponse } from "next/server";
import { addProductToUserCart, getCart, removeProductFromUserCart } from "@/queries/users";
import dbConnect from "@/lib/mongo";
import { auth } from "@/auth";
import mongoose from "mongoose";


// REMOVE PRODUCT FROM CART
export const PATCH = auth(async function PATCH(request) {

    if (request.auth?.user) {
        const session = await auth()
        try {
            const { product } = await request.json();

            // Create a DB Connection
            await dbConnect();
            console.log("Database connected");


            // Update the DB
            await removeProductFromUserCart(session?.user.id, product);
            console.log("Product Removed:", product);


            return new NextResponse("product has been removed from cart", {
                status: 201
            });
        } catch (error) {
            console.error("Error removing product from cart:", error);
            return new NextResponse(error.message, {
                status: 500
            });
        }
    } else {
        return NextResponse.json({ message: "Not authorized" }, { status: 401 })
    }


});


// GET SIGNED IN USER'S CART
export const GET = auth(async function (request, { params }) {
    // console.log(request)
    if (request.auth?.user.id === params.id) {
        try {

            await dbConnect();
            console.log("Database connected");
            // console.log(session?.user.id)

            const cart = await getCart(request.auth?.user.id);
            // console.log("Fetched cart:", cart);

            return new NextResponse(JSON.stringify(cart), {
                status: 200
            });
        } catch (error) {
            console.error("Error fetching cart:", error);
            return new NextResponse(error.message, {
                status: 500
            });
        }
    } else {
        console.log(request.auth.user, params.id)
        return NextResponse.json({ message: "Not authorized" }, { status: 401 })
    }

});