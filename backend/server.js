import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";

app.use(cors());

//this is dummy root for testing
app.get("/api/v1", (req, res) => {
  res.send("Hello Frontend this is Backend!");
});

// connection with DB
const port = process.env.PORT || 4000;
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected with MONGO DB!");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
} catch (error) {
  console.log(error);
}
