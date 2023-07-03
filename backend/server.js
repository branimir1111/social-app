import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";

app.use(cors());

//this is dummy root for testing
app.get("/api/v1", (req, res) => {
  res.send("Hello Frontend this is Backend!");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
