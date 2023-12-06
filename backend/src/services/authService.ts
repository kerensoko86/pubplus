import { Collection } from "mongodb";
import { ObjectId } from "mongodb";
import { comparePasswords } from "./authUtils";
import { generateToken } from "./tokenUtils";

export type User = {
  _id: ObjectId;
  username: string;
  hashedPassword: string;
  status: string;
  gender: string;
};

export const login = async (
  username: string,
  password: string,
  usersCollection: Collection<User>
): Promise<string | null> => {
  try {
    const user = await usersCollection.findOne({ username });
    if (!user || !(await comparePasswords(password, user.hashedPassword))) {
      return null;
    }

    return generateToken(user._id);
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const authenticateUser = async (
  username: string,
  password: string,
  usersCollection: Collection<User>
): Promise<boolean> => {
  const user = await usersCollection.findOne({ username });

  if (!user) {
    console.log("User not found");
    return false;
  }

  const isPasswordValid = await comparePasswords(password, user.hashedPassword);

  if (!isPasswordValid) {
    console.log("Invalid password");
    return false;
  }

  console.log("Authentication successful");
  return true;
};
