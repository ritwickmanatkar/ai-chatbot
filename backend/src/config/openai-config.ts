// Imports
import { Configuration } from "openai";

// Configuration function
export function configureOpenAI() {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPEN_AI_ORGANIZATION_ID
    });
};
