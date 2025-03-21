import express from "express";
import cors from "cors";
import urlRoutes from "./routes";
import { connectDB } from "./config/db";

const app = express();

// Connect to DB
connectDB(process.env.MONGO_URI!);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/url", urlRoutes);

export default app;
