// Imports
import { Request, Response, NextFunction} from 'express';
import User from "../models/user.js";

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

export {getAllUsers};