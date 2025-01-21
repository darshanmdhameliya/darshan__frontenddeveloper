import express, {  Router } from 'express';

const userRouter = express.Router()

// http://127.0.0.1:9999/api/users/home
userRouter.get("/home", (request, response) => {
    response.json({
        msg: "Hello"
    })
})

// http://127.0.0.1:9999/api/users/insertuser
userRouter.post("/insertuser", (request, response) => {
    response.json({
        msg: "Record Inserted .. "
    })
})

export default userRouter;