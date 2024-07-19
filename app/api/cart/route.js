import { NextResponse } from "next/server";
import { addProductToUserCart, getCart } from "@/queries/users";
import dbConnect from "@/lib/mongo";
import { auth } from "@/auth";
import mongoose from "mongoose";


// ADD PRODUCT TO SIGNED IN USER'S CART
export const PATCH = async (request) => {

    const session = await auth()
    try {
        const { product } = await request.json();

        // Create a DB Connection
        await dbConnect();
        console.log("Database connected");

        const cartItem = {
            ...product,
            id: `${product._id}${Date.now()}`
        }

        // Update the DB
        await addProductToUserCart(session?.user.id, cartItem);
        console.log("Product Added:", cartItem);


        return new NextResponse("product has been added to cart", {
            status: 201
        });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }

};