import jwt, { type JwtPayload } from "jsonwebtoken";

export const generateJWT = (payload: JwtPayload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "180d", // 1d o 10d es 1dia o 10dias, 1m es 1 minuto
  });

  return token;
};
