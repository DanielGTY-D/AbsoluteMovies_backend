import { Router, type IRouter } from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/user.controller.ts";
import { handleInputErrors } from "../middleware/validation.ts";

const router: IRouter = Router();

router.post(
  "/auth/register",
  body("email").notEmpty().isEmail().withMessage("No es un email valid"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  body("username")
    .notEmpty()
    .withMessage("El nombre de usuario es obligatorio"),
  handleInputErrors,
  register,
);

router.post(
  "/auth/login",
  body("email").notEmpty().isEmail().withMessage("No es un email valid"),
  body("password")
    .notEmpty()
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  handleInputErrors,
  login,
);

export default router;
