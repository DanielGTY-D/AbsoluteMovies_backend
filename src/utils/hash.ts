import bcrypt from "bcrypt";

export const hashPassword = async (pass: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(pass, salt);
};

export const checkPassword = async (enteredPassword: string, hash: string) => {
  const result = await bcrypt.compare(enteredPassword, hash);
  return result;
};
