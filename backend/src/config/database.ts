import mongoose, { models } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const dbConnect = async () => {
    try {
        mongoose.connect(process.env.DATABASE_URL!)
            .then(() => { console.log("connected to Database Succesfully") });
    } catch (error) {
        console.log("error while connecting to DB", error);
        process.exit(1);
    }
}
