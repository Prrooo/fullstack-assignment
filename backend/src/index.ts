import { Request, Response } from "express";
import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/database';
import cardRouter from "./routes/cardRoute";

const cors=require("cors");
const app = express();

dotenv.config();

export const PORT = process.env.PORT || "5000";

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Running at PORT ${PORT}`);
})

// Db connection
dbConnect();

// Routes
app.use('/api', cardRouter);

app.use((err: any, req: Request, res: Response) => {
    console.error('Unhandled error:', err);

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal server error',
    });
});

// Ping Route
app.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({
        message: "working",
    })
})