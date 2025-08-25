import express, { type Express } from "express";
import cors from "cors";
import userRouter from "./routes/user";
import moviesRouter from "./routes/movies";
import { connectDB } from "./config/db";
import { corsConfig } from "./config/cors";

const app: Express = express();

//conectar a la base de datos
connectDB();

// habilitar leer la recepcion de datos en formato JSON
app.use(express.json());

app.use((req, res, next) => {
  console.log("headers", req.headers);
  next();
});

// hablitar cors
app.use(cors(corsConfig));

app.use("/api", userRouter);
app.use("/api", moviesRouter);

export default app;
