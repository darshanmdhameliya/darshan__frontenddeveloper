import { Request, Response } from "express";
import { IGroup } from "../models/IGroup";
import GroupsTable from "../database/GroupSchema";
import mongoose from "mongoose";

/**
    @usage : Get all groups
    @method : GET
    @params : no-params
    @url : http://localhost:9900/group/
*/

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

/**
    @usage : to get a group
    @method : GET
    @params : groupId
    @url : http://localhost:9900/group/:groupId
*/

export const getGroup = async (request: Request, response: Response) => {
  let { groupId } = request.params;
  const mongoGroupId = new mongoose.Types.ObjectId(groupId);
  let theGroup: IGroup | undefined | null = await GroupsTable.findById(
    mongoGroupId
  );
  if (!theGroup) {
    return response.status(500).json({
      data: null,
      error: "No Group is found",
    });
  }
  return response.status(200).json(theGroup);
};

/**
    @usage : create group
    @method : POST
    @params : name
    @url : http://localhost:9900/group/

*/

export const createGroup = async (request: Request, response: Response) => {
  // let { username } = request.body;
  // let { email } = request.body;
  // let { password } = request.body;
  // let { imageUrl } = request.body;
  const data= request.body
  console.log("data",data);
  

  let theGroup: IGroup | null | undefined = await new GroupsTable(data).save();
  if (theGroup) {
    return response.status(200).json({
      data: theGroup,
      msg: "Group is Created",
    });
  }
};
