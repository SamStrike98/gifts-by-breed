import User from "@/models/user-model";
import mongoose from "mongoose";

export async function addProductToUserCart(userId, product) {
    console.log(userId, product)
    try {
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { cart: product } }
        );
        return user;
    } catch (error) {
        throw new Error(error)
    }
}