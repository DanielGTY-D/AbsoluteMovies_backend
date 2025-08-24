import type { Request, Response } from "express";
import User from "../models/User.model";

export const setFavoriteMovies = async (req: Request, res: Response) => {
  const { data } = req.body;
  const { username } = req.params;

  try {
    const user = await User.findOne({ username }).select("-password");

    if (!user) {
      const error = new Error("Usuario no encontrado");
      res.status(404).json({ error: error.message });
      return;
    }

    user.favoriteContent = data;

    await user.save();
    res.json({ msg: "Pelicula agregada a favoritos", user });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: "Error del servidor" });
  }
};

export const removeFavoriteMovies = async (req: Request, res: Response) => {
  const { data } = req.body;
  const { username } = req.params;
  const user = await User.findOne({ username });
  try {
    if (!user) {
      const error = new Error("Usuario no encontrado");
      res.status(404).json({ error: error.message });
      return;
    }

    user.favoriteContent = data;

    await user.save();
    res.json("Removiendo pelicula de favoritos");
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Error del servidor" });
  }
};
