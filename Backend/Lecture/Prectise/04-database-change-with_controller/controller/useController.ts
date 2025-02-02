import { Request, Response } from "express";
import { userUtil } from "../util/useUtil";
import { IBooks } from "../models/IBooks";

export const getAllUsers = async (request: Request, response: Response) => {
    try {
        let useData:IBooks[] = await userUtil.getAllUsersDB();
        return response.status(200).json(useData)
    } catch (error) {
        return response.status(500).json({ msg: "server error" })
    }
}