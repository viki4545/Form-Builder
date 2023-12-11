import "dotenv/config";

import { FormRouter } from "./src/routers/formRouter.js";

import connectDB from "./src/Config/conn.js";
import cors from "cors";
import errorHandler from "./src/middlewares/errorHandlerMiddleware.js";
import express from "express";

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server status check
app.get("/", (req, res, next) => {
  res.send({
    data: "OK",
  });
});

// Routers
app.use("/form", FormRouter);
// error logging and handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
