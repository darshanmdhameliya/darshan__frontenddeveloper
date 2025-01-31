import express, {  Router } from 'express';
import * as useController from "../controller/userController.js"
const userRouter = express.Router()

// http://127.0.0.1:9999/api/users/home
userRouter.get("/",async (request, response) => {
   await useController.getAllUsers(request,response)
})

// http://127.0.0.1:9999/api/users/insertuser
// userRouter.post("/insertuser", (request, response) => {
//     response.json({
//         msg: "Record Inserted .. "
//     })
// })

export default userRouter;