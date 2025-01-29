import express, { Application, Request, Response, Router } from 'express';
import * as userController from "../controller/userController"

const userRouter: Router = Router()

// http://127.0.0.1:9999/api/users/
userRouter.get("/", async (request: Request, response: Response) => {
    console.log("inside Router");
    await userController.getAllUsers(request, response);

})

// http://127.0.0.1:9999/api/users/insertuser
// userRouter.post("/insertuser", (request: Request, response: Response) => {
//     response.json({
//         msg: "Record Inserted .. "
//     })
// })

export default userRouter;