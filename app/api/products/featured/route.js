import { NextResponse } from "next/server";
import { getAllFeaturedProducts } from "@/queries/products";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";

export const GET = async (request) => {
    try {
        await dbConnect();
        console.log("Database connected");

        const products = await getAllFeaturedProducts();
        // console.log("Fetched products:", products);

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