// Imports
import { Request, Response, NextFunction} from 'express';
import User from "../models/user.js";
import { hash } from 'bcrypt';

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

        const new_user = new User({name, email, password: hashedPassword});

        // Saving the entry
        await new_user.save()

        // Returning the status code and the user id.
        return response.status(200).json({message: "OK", id: new_user._id.toString()});
    } catch (error) {
        console.log(error);
        return response.status(500).json({message: "Internal Server Error", cause: error.message});
    }
};

export {getAllUsers, userSignup};