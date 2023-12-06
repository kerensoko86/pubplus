import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!process.env.SECRET_KEY) {
    return res.status(500).json({ error: "Secret key is not defined." });
  }

  if (!token) {
    return res.sendStatus(401);
  }
  const secretKey = process.env.SECRET_KEY as Secret;

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    (req as any).user = user;
    next();
  });
};
