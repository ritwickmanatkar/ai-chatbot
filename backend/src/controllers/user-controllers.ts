// Imports
import { Request, Response, NextFunction} from 'express';
import User from "../models/user.js";
import { hash, compare } from 'bcrypt';

const getAllUsers = async (request: Request, response: Response, next: NextFunction) => {
    try {
        // get all users from the DB.
        const users = await User.find();
        return response.status(200).json({message: "OK", users});
    } catch (error) {
        console.log(error);
        return response.status(500).json({message: "Internal Server Error", cause: error.message});
    }
};

const userSignup = async (request: Request, response: Response, next: NextFunction) => {
    try {
        // insert user info into the DB.
        const { name, email, password } = request.body; 

        // Encrypting the password for security reasons.
        const hashedPassword = await hash(password, 10);

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser)return response.status(401).send("Email is already registered.");

        // Saving the entry
        const new_user = new User({name, email, password: hashedPassword});
        await new_user.save()

        // Returning the status code and the user id.
        return response.status(200).json({message: "OK", id: new_user._id.toString()});
    } catch (error) {
        console.log(error);
        return response.status(500).json({message: "Internal Server Error", cause: error.message});
    }
};

const userLogin = async (request: Request, response: Response, next: NextFunction) => {
    try {
        // insert user info into the DB.
        const { name, email, password } = request.body; 

        // Extract and check if User exists.
        const user = await User.findOne({ email });
        if (!user) return response.status(401).send("User not found. Please register this email.");
        
        // Make sure the password is correct.
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) return response.status(403).send("Incorrect password.");

        // Successfully logged in.
        return response.status(200).json({message: "OK", id: user._id.toString()});
    } catch (error) {
        console.log(error);
        return response.status(500).json({message: "Internal Server Error", cause: error.message});
    }
};

export {getAllUsers, userSignup, userLogin};