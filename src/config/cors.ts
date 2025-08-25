import cors from "cors";
import { CorsOptions } from "cors";
const allowedOrigins = [
  process.env.FRONTEND_URL, // ej: "https://mi-frontend.netlify.app"
];

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    console.log("Origin recibido:", origin);

    // Permitir requests sin origin (Postman, scripts, backend-to-backend)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS no permitido"));
    }
  },
  credentials: true, // si usas cookies o auth headers
};
