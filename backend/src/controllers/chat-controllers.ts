// Imports
import { NextFunction, Request, Response } from "express";
import User from '../models/user.js';
import { configureOpenAI } from "../config/openai-config.js";
import { ChatCompletionRequestMessage, OpenAIApi } from "openai";

// Controller Functions
export const generateChatCompletion = async (request: Request, response: Response, next: NextFunction) => {
    const { message } = request.body;

    try {
        // Get a Validated User
        const user = await User.findById(response.locals.jwtData.id);
        if (!user) {
            return response.status(401).json({message: "User not found OR Token Invalid."});
        };

        // Grab Chats of the user. 
        const chats = user.chats.map(({role, content}) => ({role, content})) as ChatCompletionRequestMessage[];
        // Add the new message to local variable for passing.
        chats.push({content: message, role: "user"});
        // Making the new chat persistent
        user.chats.push({content: message, role: "user"});

        // Send all chats with the new addition to OpenAI API
        const config = configureOpenAI();
        const openai = new OpenAIApi(config);

        const chatResponse = await openai.createChatCompletion({model: 'gpt-3.5-turbo', messages: chats});

        // Make the GPT response persistent in DB
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save() // Complete the transaction

        return response.status(200).json({chats: user.chats});
    } catch (error) {
        return response.status(500).json({message: "Something went wrong..."});
    }
    
};