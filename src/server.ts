import express, { type Express } from "express";
import cors from "cors";
import userRouter from "./routes/user.ts";
import { connectDB } from "./config/db.ts";
import { corsConfig } from "./config/cors.ts";
const app: Express = express();

//conectar a la base de datos
connectDB();

// habilitar leer la recepcion de datos en formato JSON
app.use(express.json());

// hablitar cors
app.use(cors(corsConfig));

app.use("/api", userRouter);

export default app;
