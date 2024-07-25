import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';



const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    prodId: {
        required: true,
        type: String
    },
    priceId: {
        required: true,
        type: String
    },
    createdAt: {
        required: true,
        type: Date,
    },
    active: {
        required: true,
        type: Boolean
    },
    price: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    },
    featured: {
        required: true,
        type: String
    },
    breed: {
        required: true,
        type: String
    },
    images: {
        type: Array
    }

});

// Check if the model exists before defining it
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;