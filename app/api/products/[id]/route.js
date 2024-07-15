import { NextResponse } from "next/server";
import { getProductById } from "@/queries/products";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";

export const GET = async (request, { params }) => {
    try {
        await dbConnect();
        console.log("Database connected");
        console.log(params.id)
        const productId = params.id

        const product = await getProductById(productId);
        console.log("Fetched product:", product);

        return new NextResponse(JSON.stringify(product), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching product:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};