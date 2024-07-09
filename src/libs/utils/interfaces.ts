import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";


export type FormData = {
  email: string;
  password: string;
  username?: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  disabled?: boolean;
};

export const UserSchema: ZodType<FormData> = z
.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
  username: z.string()
  .min(8, { message: "Username is too short" })
  .max(20, { message: "Username is too long" }),
});

export type ValidFieldNames = "email" | "username" | "password";