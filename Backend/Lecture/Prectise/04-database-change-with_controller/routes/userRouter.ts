import express, { Application, Request, response, Response, Router } from "express"
import * as userController from "../controller/userController"


const UserRouter: Router = Router()


UserRouter.get("/", async (request:Request , response:Response)=>{
    console.log("Inside Router");
    await userController.getAllUsers(request,response)
    
})

export default UserRouter