import dbConnect from "@/lib/mongo";
import { getAllProductsByBreed } from "@/queries/products";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const breed = params.breed

    try {
        await dbConnect();
        console.log("Database connected");

        console.log(breed)
        const products = await getAllProductsByBreed(breed);
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