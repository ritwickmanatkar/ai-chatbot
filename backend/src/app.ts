// --------- Imports --------- 
import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// --------- Declarations --------- 
const app = express();
config();

// --------- Middlewares --------- 
app.use(cors({origin: "http://localhost:5173", credentials:true})); 
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

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