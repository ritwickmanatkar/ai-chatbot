// Imports
import { connect, disconnect } from "mongoose";

// Connection to DB
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to MongoDB...')
    }
}

// Disconnect from DB
async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error('Error disconnecting to MongoDB...')
    }
}

export {connectToDatabase, disconnectFromDatabase};
