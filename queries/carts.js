import Cart from "@/models/cart-model";


export async function getCartByUser(userId) {
    try {
        const cart = await Cart.find({ userId: userId });
        return cart;
    } catch (error) {
        throw new Error(error)
    }
}

export async function addProductToCart(id, { name, }) {
    try {
        const product = await Cart.findOneAndUpdate(
            { _id: collectionId },
            { $push: { products: { name: name, dateAdded: dateAdded, } } },
        )

        const user = await User.findOneAndUpdate(
            { _id: item.userId },
            { $push: { feed: { text: `Added ${name} to the collection ${collectionId}`, id: Object(32) } } },
        )

        return item
    } catch (error) {
        throw new Error(error)
    }
}