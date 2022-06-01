import express from "express";
import "dotenv/config";
import connectDB from "./Config/db.js";
import colors from "colors";
import cors from "cors";

import { errorHandler } from "./Middlewares/errorMiddleware.js";
import userRouter from "./Routes/userRoute.js";

//Connection to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Routes
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
