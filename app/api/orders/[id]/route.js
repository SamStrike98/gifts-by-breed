import { NextResponse } from "next/server";
import { getAllOrders } from "@/queries/users";
import dbConnect from "@/lib/mongo";
import { auth } from "@/auth";
import mongoose from "mongoose";



// GET SIGNED IN USER'S Orders
export const GET = auth(async function (request, { params }) {
    // console.log(request)
    if (request.auth?.user.id === params.id) {
        try {

            await dbConnect();
            console.log("Database connected");
            // console.log(session?.user.id)

            const orders = await getAllOrders(request.auth?.user.id);
            // console.log("Fetched cart:", cart);

            return new NextResponse(JSON.stringify(orders), {
                status: 200
            });
        } catch (error) {
            console.error("Error fetching orders:", error);
            return new NextResponse(error.message, {
                status: 500
            });
        }
    } else {
        console.log(request.auth.user, params.id)
        return NextResponse.json({ message: "Not authorized" }, { status: 401 })
    }

});