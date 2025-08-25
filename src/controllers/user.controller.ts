import type { Request, Response } from "express";
import User from "../models/User.model";
import { checkPassword, hashPassword } from "../utils/hash";
import { generateJWT } from "../config/jwt";

export const register = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  const user = new User(req.body);

  try {
    const emailExists = await User.findOne({ email });
    const usernameExists = await User.findOne({ username });
    if (emailExists) {
      const error = new Error("Este usuario ya esta registrado");
      res.status(400).json({ error: error.message });
      return;
    }

    if (usernameExists) {
      const error = new Error("Ese nombre de usuario ya esta registrado");
      res.status(400).json({ error: error.message });
      return;
    }

    // hashear el password
    user.password = await hashPassword(password);

    user.save();
    res.status(201).json({ msg: "Cuenta creada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error del servidor, al crear el usuario" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("-password");

  try {
    if (!user) {
      const errror = new Error("Este usuario no esta registrado");
      res.status(404).json({ msg: errror.message });
      return;
    }

    const isPasswordCorrect = await checkPassword(password, user.password);

    if (!isPasswordCorrect) {
      const error = new Error("El password no es correcto");
      res.status(400).json({ error: error.message });
    }

    const token = generateJWT({ id: user.id });

    res.json({ token, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error del servidor, al iniciar sesion" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  const { username } = req.params;
  const { new_username, email, passsword } = req.body;
  const user = await User.findOne({ username });
  try {
    if (!user) {
      const error = new Error("Usuario no encontrado");
      res.status(404).json({ error: error.message });
      return;
    }

    user.username = new_username || user.username;
    user.email = email || user.email;
    user.password = passsword ? await hashPassword(passsword) : user.password;

    await user.save();
    res.json("Perfil actualizado correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error del servidor" });
  }
};
