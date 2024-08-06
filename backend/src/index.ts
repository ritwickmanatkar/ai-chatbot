import express from 'express';

const app = express();

// Middlewares
app.use(express.json());



// Connections and Listeners

// For my Macbook port 5000 was in use due to Airplay settings being turned on. 
// I turned it off to make this work.
app.listen(5000, () => console.log("Server is now open..."));