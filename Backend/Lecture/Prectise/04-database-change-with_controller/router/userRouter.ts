import { Request , Response , Router} from "express";
import * as useController from "../controller/userController"
import { request } from "http";

const userRouter:Router = Router();

// userRouter.get("/" ,(request:Request,response:Response)=>{
//     response.json({
//         msg:"Inside Router"
//     })
// } )

userRouter.get("/" , async(request:Request,response:Response)=>{
   await useController.getAllUsers(request,response)
})



export default userRouter
