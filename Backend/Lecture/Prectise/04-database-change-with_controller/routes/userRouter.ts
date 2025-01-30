import { Request , Response , Router} from "express";
import * as userController from "../controller/userController"
import { request } from "http";

const userRouter:Router= Router()

userRouter.get("/", async(request:Request,response:Response)=>{
    console.log("Inside Router");
    await userController.getAllUsers(request,response)
    
})

export default userRouter