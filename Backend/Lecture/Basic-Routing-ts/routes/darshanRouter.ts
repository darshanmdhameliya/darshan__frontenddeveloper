import express , { Application , Response , Request , Router} from 'express';

const darshanRouter:Router = Router()

// http://127.0.0.1:9999/api/users/home
darshanRouter.get("/home",(request:Request,response:Response)=>{
    response.json({
        msg:"darshan"
    })
})

// http://127.0.0.1:9999/api/users/aboutus
darshanRouter.post("/aboutus",(request:Request,response:Response)=>{
    response.json({
        msg:"Record Inserted ..."
    })
})



export default darshanRouter

