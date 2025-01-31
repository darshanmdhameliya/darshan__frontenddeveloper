import express, {Application , Request ,Response} from "express";
import userRouter from "./router/userRouter";

const hostName : string = "127.0.0.1"
const port :number= 9999

const app:Application = express()


app.get("/" , (request:Request,response: Response)=>{
    response.json({
        msg:"Server is started"
    })
})
 
app.listen(port ,hostName ,()=>{
    console.log(`Express Server is started at http://${hostName}:${port}`);
})

app.use("/api/users",userRouter)