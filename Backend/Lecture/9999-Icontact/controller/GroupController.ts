import { Request, Response } from "express";
import { IGroup } from "../models/IGroup";
import GroupsTable from "../database/GroupSchema";

export const getAllgroup = async (request: Request, response: Response) => {
  try {
    let groups: IGroup[] | undefined = await GroupsTable.find();
    if (groups) {
      return response.status(200).json(groups);
    }
  } catch (error: any) {
    return response.status(500).json({ msg: "Data not found" });
  }
};

export const createGroup = async (request: Request, response: Response) => {
  let { name } = request.body;
  let theGroup: IGroup | null | undefined = await new GroupsTable({
    name: name,
  }).save();
  if (theGroup) {
    return response.status(200).json({
      data: theGroup,
      msg: "Group is Created",
    });
  }
};
