import Product from "@/models/product-model";

export async function createProduct(product) {
    try {
        await Product.create(product);
        return product;
    } catch (error) {
        throw new Error(error)
    }
}

export async function getAllProducts() {
    try {
        const products = await Product.find({ active: true });
        return products;
    } catch (error) {
        throw new Error(error)
    }
}

export async function getProductById(id) {
    try {
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        throw new Error(error)
    }
}

export async function getAllProductsByBreed(breed) {
    try {
        const products = await Product.find({ breed: breed });
        return products;
    } catch (error) {
        throw new Error(error)
    }
}