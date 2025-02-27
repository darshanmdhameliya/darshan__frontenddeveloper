import { Request, Response, Router } from "express";
import { body } from "express-validator";
import * as userController from "../controller/userController";

const userRouter: Router = Router();

userRouter.get("/", async (request: Request, response: Response) => {
  await userController.getAllUser(request, response);
});

userRouter.get("/:userId", async (request: Request, response: Response) => {
  await userController.getUser(request, response);
});


// @usage  : register user
// @method : POST
// @params : username , email , password
// @url    :http://127.0.0.1:9797/users/register

userRouter.post(
  "/register",
  [
    body("username").not().isEmpty().withMessage("UserName is Required"),
    body("email").not().isEmpty().withMessage("email is Required"),
    body("password").isStrongPassword().withMessage("Strong password is Required"),
  ],
  async (request: Request, response: Response) => {
    await userController.registerUser(request, response);
  }
);

userRouter.put("/:userId", async (request: Request, response: Response) => {
  await userController.updateuser(request, response);
});

userRouter.delete("/:userId", async (request: Request, response: Response) => {
  await userController.deleteuser(request, response);
});

export default userRouter;
