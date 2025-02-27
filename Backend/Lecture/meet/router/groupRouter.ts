import { Request, Response, Router } from "express";
import { body } from "express-validator";
const GroupRouter: Router = Router();

// GroupRouter.get("/home", (request: Request, response: Response) => {
//     response.status(200).json({
//         msg: "Welcome to home"
//     })
// })
// GroupRouter.post("/insertgroup", (request: Request, response: Response) => {
//     response.status(200).json({
//         msg: "DataInserted.."
//     })
// })

// @usage  : get group by id
// @method : get
// @params : groupId
// @url    :http://127.0.0.1:9797/groups/:groupId

GroupRouter.get("/:groupId", async (request: Request, response: Response) => {
    await groupController.getgroup(request, response)
})
import * as groupController from "../controller/groupController"

// @usage  : get all groups
// @method : get
// @params : no-params
// @url    :http://127.0.0.1:9797/groups

GroupRouter.get("/", async (request: Request, response: Response) => {
    await groupController.getAllgroups(request, response)
})

GroupRouter.post("/", [body('name').not().isEmpty().withMessage("Name is Required")],
 
    async (request: Request, response: Response) => {
        console.log("post");
        await groupController.creategroup(request, response);
    }
)

// update
GroupRouter.put("/:groupId", async (request: Request, response: Response) => {
    await groupController.updategroup(request, response)
})

// delete
GroupRouter.delete("/:groupId", async (request: Request, response: Response) => {
    await groupController.deletegroup(request, response)
})
export default GroupRouter