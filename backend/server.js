import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import {  server } from "./socket/socket.js";

dotenv.config();

const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); 
app.use(cookieParser());
app.use(cors());




app.use((req, res, next) => {
  console.log("🌐 Incoming Request:", req.method, req.originalUrl);
  next();
});




app.get("/", (req, res) =>{
res.send("hello world")
})



app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);

app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});

