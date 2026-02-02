import express from 'express';
import userRouter from './routes/userRouter.js'
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001
const __dirname = path.resolve();
const EMAIL = process.env.VITE_EMAIL


if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173",
    }));
}

// app.use(cors())
app.use(express.json());
app.use("/api/users", userRouter);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    });
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT)
    });
});