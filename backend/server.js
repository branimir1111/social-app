import "express-async-errors";
import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

app.use(cors());
app.use(express.json({ limit: "15mb" }));
app.use(cookieParser());

app.use("/api/v1/auth/", authRoutes);

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
