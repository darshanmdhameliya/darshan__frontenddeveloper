import express, { Request, Response, Router } from "express";
import * as userController from "../controller/useController"

const userRouter: Router = Router()

userRouter.get("/", async (response: Response, request: Request) => {
    await userController.getAllUsers(request, response)
})

export default userRouter