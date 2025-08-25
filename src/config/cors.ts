import cors from "cors";
import { CorsOptions } from "cors";
// const allowedOrigins = [
//   process.env.FRONTEND_URL, // ej: "https://mi-frontend.netlify.app"
//   "http://localhost:5173", // Vite
//   "https://absolutemovies.netlify.app/",
//   "https://absolutemovies.netlify.app",
//   undefined,
//   "undefined",
// ];

const allowedOrigins = [
  process.env.FRONTEND_URL, // ej: "https://mi-frontend.netlify.app"
  "http://localhost:5173", // Vite
];

export const corsConfig: CorsOptions = {
  // origin: true,
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
