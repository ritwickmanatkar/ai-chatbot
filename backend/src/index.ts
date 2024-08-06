import express from 'express';

const app = express();

// Standard Routes for GET/POST/PUT/DELETE
app.use(express.json());
app.get("/hello", (request, response, next) => {
  console.log(request.body.name);
  return response.send("Hello from the GET middleware...");
});

// Dynamic Routes for GET/POST/PUT/DELETE
app.use(express.json());
app.get("/user/:id", (request, response, next) => {
  console.log(request.body.name);
  console.log(request.params.id);
  return response.send("Hello from the GET middleware...");
});

// For my Macbook port 5000 was in use due to Airplay settings being turned on. 
// I turned it off to make this work.
app.listen(5000, () => console.log("Server is now open..."));