import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';



const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    createdAt: {
        required: true,
        type: Date,
    },
    isPublic: {
        required: true,
        type: Boolean
    },
    price: {
        required: true,
        type: Number
    },
    stock: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    },
    featured: {
        required: true,
        type: Boolean
    },
    breed: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    }

});

// Check if the model exists before defining it
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;