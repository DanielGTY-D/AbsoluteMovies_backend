import { Router, type IRouter } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validation";
import {
  removeFavoriteMovies,
  setFavoriteMovies,
} from "../controllers/movies.controller";

const router: IRouter = Router();

router.post(
  "/favorite-content/add/:username",
  body("data")
    .notEmpty()
    .withMessage("Data is required")
    .isString()
    .withMessage("Data must be a string"),
  handleInputErrors,
  setFavoriteMovies,
);

router.post(
  "/favorite-content/remove/:username",
  body("data")
    .notEmpty()
    .withMessage("Data is required")
    .isString()
    .withMessage("Data must be a string"),
  handleInputErrors,
  removeFavoriteMovies,
);

export default router;
