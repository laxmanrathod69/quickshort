import express from "express";
import cors from "cors";
import urlRoutes from "./routes";
import { connectDB } from "./config/db";

const app = express();

// Connect to DB
connectDB(process.env.MONGO_URI!);

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_API!,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api/url", urlRoutes);

export default app;
