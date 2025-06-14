import { Router } from "express";
import usersRouter from "./features/users/users.routes";

const router = Router();


router.all('/users', usersRouter)


export default router;