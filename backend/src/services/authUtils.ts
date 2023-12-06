import bcryptjs from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return bcryptjs.hash(password, saltRounds);
};

export const comparePasswords = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcryptjs.compare(plainPassword, hashedPassword);
};
