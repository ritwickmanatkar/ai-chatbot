// Imports
import express from 'express';
import { config } from 'dotenv';

// Declarations
const app = express();
config();

// Middlewares
app.use(express.json());

app.get('/user/:id', (request, response, next)=>{
    console.log(request.params.id);
    return response.send("Hello user");
});


// Export the app
export default app;