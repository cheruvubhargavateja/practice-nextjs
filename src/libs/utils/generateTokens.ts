import jwt from "jsonwebtoken";

export default function generateToken(data: any) {
  const token = jwt.sign(
    {
      data,
    },
    process.env.TOKEN_SECRET!,
    { expiresIn: "1h" }
  );

  return token;
}
