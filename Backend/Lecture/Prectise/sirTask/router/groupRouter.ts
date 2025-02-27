import {  Request , Response , Router} from "express"
import * as groupController from "../controller/groupController"
import { body } from "express-validator"

const groupRouter:Router = Router()

/**
    @usage : Get all groups
    @method : GET
    @params : no-params
    @url : http://localhost:9988/group/
*/

groupRouter.get("/",async (requset:Request,response:Response)=>{
    await groupController.getAllgroup(requset,response)
})

/**
    @usage : Get all groups
    @method : GET
    @params : no-params
    @url : http://localhost:9988/group/
*/

groupRouter.get("/:groupId",async (requset:Request,response:Response)=>{
  await groupController.getGroup(requset,response)
})

/**
    @usage : create group`
    @method : post
    @params : name
    @url : http://localhost:9988/group
*/

groupRouter.post( "/",
    async (request: Request, response: Response) => {
      // console.log("post",body('name'));
      await groupController.createGroup(request, response);
    }
  );

export default groupRouter