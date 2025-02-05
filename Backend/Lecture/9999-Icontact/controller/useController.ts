import { Request , Response } from "express";
import { userUtil } from "../util/userUtil";
import { IGroup } from "../model/IGroup"
import GroupTable from "../database/GroupSchema";

export const getAlluser = async (request:Request,response:Response)=>{
        try{
            let useData:IGroup[] = await userUtil.getAllUserByDB()
            return response.status(200).json(useData)
        }catch(error){
            return response.status(500).json({msg:"Server Error"})
        }
}

export const insertUser  = async (request: Request, response: Response) => {
    try {
        const newUser : IGroup[]= request.body; // Get the user data from the request body
        const createdUser  = await GroupTable.create(newUser ); // Insert the new user into the database
        return response.status(201).json(createdUser ); // Respond with the created user
    } catch (error) {
        return response.status(500).json({ msg: "Server Error", error   });
    }
};