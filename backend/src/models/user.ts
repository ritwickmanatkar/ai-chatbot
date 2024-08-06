// Imports
import mongoose from "mongoose";
import { randomUUID } from 'crypto';

// Schema for Chats
const chatSchema = new mongoose.Schema({
    // Random UUID for Chat ID
    id: {
        type: String,
        default: randomUUID()
    },
    // 2 roles: AI chatbot or User
    role: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

// Schema for Users
const userSchema = new mongoose.Schema({
    // ID Provided automatically
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    chats: [chatSchema]
});

// Export the Schema
export default mongoose.model("User", userSchema);
