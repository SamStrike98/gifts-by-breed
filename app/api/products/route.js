import { NextResponse } from "next/server";
import { createProduct, getAllProducts } from "@/queries/products";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";

export const GET = async (request) => {
    try {
        await dbConnect();
        console.log("Database connected");

        const products = await getAllProducts();
        console.log("Fetched products:", products);

        return new NextResponse(JSON.stringify(products), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};


export const POST = async (request) => {
    // if (request.auth?.user.role === 'admin') {
    try {
        const { name, isPublic, price, stock, description, featured, breed } = await request.json();

        // Create a DB Connection
        await dbConnect();
        console.log("Database connected");

        const createdAt = new Date();

        // Form a DB Payload
        const newProduct = {
            name, createdAt, isPublic, price, stock, description, featured, breed
        };

        // Update the DB
        await createProduct(newProduct);
        console.log("Product created:", newProduct);


        return new NextResponse("Product has been created", {
            status: 201
        });
    } catch (error) {
        console.error("Error creating Product:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};


