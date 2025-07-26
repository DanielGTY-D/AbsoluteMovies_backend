import colors from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI);
    const urlConnection =
      await `${connection.connection.host}:${connection.connection.port}`;

    console.log(colors.green(`MongoDB connected at ${urlConnection}`));
  } catch (error) {
    console.error(
      colors.red(`Error al conectar a la base de datos: ${error} `),
    );
    process.exit(1);
  }
};
