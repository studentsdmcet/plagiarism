import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import studentRoute from "./route/student.router.js"; // Ensure path is correct

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.use("/student", studentRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
