// Imports
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// Connections and Listeners
const PORT = process.env.PORT || 5000;

connectToDatabase().then(() => {
  console.log('Database is connected...');
  // For my Macbook port 5000 was in use due to Airplay settings being turned on. 
  // I turned it off to make this work.
  app.listen(5000, () => console.log("Server is now open..."));
})
.catch((err) => console.log(err));
