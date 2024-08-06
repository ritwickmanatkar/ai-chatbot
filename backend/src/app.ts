// --------- Imports --------- 
import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';

// --------- Declarations --------- 
const app = express();
config();

// --------- Middlewares --------- 
app.use(express.json());

// TODO: Remove in prod...
app.use(morgan('dev'));

// Define the primary router
app.use('/api/v1', appRouter);

// TODO: Test stuff remove later
// app.get('/user/:id', (request, response, next)=>{
//     console.log(request.params.id);
//     return response.send("Hello user");
// });


// --------- Export the app --------- 
export default app;