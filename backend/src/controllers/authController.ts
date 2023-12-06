import { Request, Response } from "express";
import { login } from "../services/authService";
import * as db from "../config/db";

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const usersCollection = await db.getCollection();

  try {
    const token = await login(username, password, usersCollection);

    if (!token) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = await usersCollection.findOne({ username });

    res.json({ token, user });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
