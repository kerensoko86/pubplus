import jwt, { Secret } from "jsonwebtoken";
import { ObjectId } from "mongodb";

export const generateToken = (userId: ObjectId): string => {
  const secretKey = process.env.SECRET_KEY as Secret;
  return jwt.sign({ userId }, secretKey, { expiresIn: "1h" });
};
