import { Request, Response } from "express";
import { UserUtil } from "../util/UserUtil";
import { IBooks } from "../models/IBooks";


export const getAllUsers = async (request: Request, response: Response) => {
    try {
        let userData:IBooks[] = await UserUtil.getAllUserDB()
        return response.status(200).json(userData)
    }catch(error){
        return response.status(500).json({msg:"Server Error"})
    }
}