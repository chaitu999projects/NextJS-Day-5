import mongoose from "mongoose";

export const DBConnection = async() => {
    const MONGODB_URI = process.env.MONGO_URI;
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("DB Connected successfully!");
    } catch (error) {
        console.log("DB not connected", error);
    }
}