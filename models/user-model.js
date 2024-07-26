import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String
    },
    displayName: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true
    },
    cart: {
        type: Array,
        required: true
    },
    orders: {
        type: Array,
        required: true
    }
});

// Check if the model exists before defining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;