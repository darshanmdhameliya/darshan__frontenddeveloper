import { Request , Response } from "express";
import { IBooks } from "../models/IBooks";
import { UserUtil } from "../util/UserUtil";
import { request } from "http";

export const getAllUsers = async( request: Request , response:Response)=>{
    try{
        let userData :IBooks[]= await UserUtil.getAllUserFromDB()
        return response.status(200).json(userData)
    }catch(error){
        return response.status(500).json({msg:"Server Error"})
    }
}