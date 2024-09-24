const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3, { message: "username must be atleast 3 characters" })
    .max(50, { message: "username can not be larger than 50 characters" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email" })
    .min(5, { message: "email must be atleast 5 characters" })
    .max(255, { message: "email can not be larger than 255 characters" }),

  password: z
    .string({ required_error: "password is required" })
    .min(8, { message: "password must be atleast 8 characters" })
    .max(1024, { message: "password can not be larger than 1024 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email" })
    .min(5, { message: "email must be atleast 5 characters" })
    .max(255, { message: "email can not be larger than 255 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .min(8, { message: "password must be atleast 8 characters" })
    .max(1024, { message: "password can not be larger than 1024 characters" }),
});

module.exports = { signupSchema, loginSchema };
