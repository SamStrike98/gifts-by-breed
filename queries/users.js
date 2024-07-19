import User from "@/models/user-model";
import mongoose from "mongoose";

export async function addProductToUserCart(userId, product) {
    console.log(userId, product)
    try {
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { cart: product } },
            { new: true }
        );
        return user;
    } catch (error) {
        throw new Error(error)
    }
}

export async function removeProductFromUserCart(userId, product) {
    console.log(userId, product)
    try {
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { cart: product } },
            { new: true }
        );
        return user;
    } catch (error) {
        throw new Error(error)
    }
}

export async function getCart(userId) {
    try {
        const cart = await User.find({ _id: userId }, { cart: 1 });
        return cart;
    } catch (error) {
        throw new Error(error)
    }
}