import express from "express";
import "dotenv/config";

import { errorHandler } from "./Middlewares/errorMiddleware.js";
import userRouter from "./Routes/userRoute.js";

const app = express();
const PORT = process.env.PORT || 8000;

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
