import express, { Router } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js"
import router from "./routes/authoRoute.js";
import authRoute from "./routes/authoRoute.js" 
// import Question from "./models/questions.js";

// Middleware

dotenv.config();
const app = express();
// const corsOptions = {
//   origin: true,
// };

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({   credentials : true,
    origin: "http://localhost:5173"
  })
);

app.use("/auth", authRoute);
app.use("/auth/user", userRoute);

//Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database is Connected"))
  .catch((err) => console.log("Database not connected", err));

// Server setup
const port = 8000;

app.listen(port, () => console.log(`${port}`));