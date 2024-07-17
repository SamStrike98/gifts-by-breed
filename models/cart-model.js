import mongoose from 'mongoose';
import productSchema from './product-model';




const cartSchema = new mongoose.Schema({
    products: [productSchema],
    userId: {
        required: true,
        type: Object
    }

});

// Check if the model exists before defining it
const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

export default Cart;