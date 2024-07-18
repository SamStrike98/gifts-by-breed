import { NextResponse } from "next/server";
import { addProductToUserCart, getCart } from "@/queries/users";
import dbConnect from "@/lib/mongo";
import { auth } from "@/auth";
import mongoose from "mongoose";

export const PATCH = async (request) => {

    const session = await auth()
    try {
        const { product } = await request.json();

        // Create a DB Connection
        await dbConnect();
        console.log("Database connected");


        // Update the DB
        await addProductToUserCart(session?.user.id, product);
        console.log("Product Added:", product);


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