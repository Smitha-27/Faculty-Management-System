import express from "express";

import mongoose from "mongoose";

import cors from "cors";

import dotenv from "dotenv";

import facultyRoutes from "./routes/facultyRoutes.js";
import dashboardRoutes from './routes/dashboardRoutes.js';



dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors());

app.use(express.json());

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// ROUTES
app.use("/api/faculty", facultyRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});
