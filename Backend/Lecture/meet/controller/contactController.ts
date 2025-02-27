import { Response, Request } from "express";
import ContactTable from "../database/ContactSchema";
import { IContact } from "../models/IContact";
import mongoose from "mongoose";

// @usage : to get all contact
// @method : GET
// @params : no-params
export const getAllcontact = async (request: Request, response: Response) => {
  try {
    let contact: IContact[] | undefined = await ContactTable.find();
    if (contact) {
      return response.status(200).json(contact);
    }
  } catch (err: any) {
    return response.status(500).json({
      msg: "Data not Found",
    });
  }
};

// get contact id
export const getcontact = async (request: Request, response: Response) => {
  let { contactId } = request.params;
  const mongocontactId = new mongoose.Types.ObjectId(contactId);
  let thecontact: IContact | undefined | null = await ContactTable.findById(
    mongocontactId
  );
  if (!thecontact) {
    return response.status(500).json({
      data: null,
      error: "No Contact is found",
    });
  }
  return response.status(200).json(thecontact);
};

//post
export const createcontact = async (request: Request, response: Response) => {
  let { name, mobile, email, company, imageUrl, title, groupId } = request.body;
  let thecontact: IContact | null | undefined = await new ContactTable({
    name: name,
    imageUrl: imageUrl,
    mobile: mobile,
    email: email,
    company: company,
    title: title,
    groupId: groupId,
  }).save();
  if (thecontact) {
    return response.status(200).json({
      data: thecontact,
      msg: "contact is created",
    });
  }
};

//update
export const updatecontact = async (request: Request, response: Response) => {
  let { contactId } = request.params;
  let { name, mobile, email, company, imageUrl, title, groupId } = request.body;
  // const mongocontactId = new mongoose.Types.ObjectId(contactId);
  let thecontact: IContact | undefined | null =
    await ContactTable.findByIdAndUpdate(
      contactId,
      {
        name,
        imageUrl,
        mobile,
        email,
        company,
        title,
        groupId,
      },
      {
        new: true,
      }
    );
  if (!thecontact) {
    return response.status(500).json({
      data: null,
      error: "No Group is found",
    });
  }
  return response.status(200).json(thecontact);
};

//delete
export const deletecontact = async (request: Request, response: Response) => {
  let { contactId } = request.params;
  let thecontact: IContact | undefined | null =
    await ContactTable.findByIdAndDelete(contactId);
  if (!thecontact) {
    return response.status(500).json({
      data: null,
      error: "No Group is found",
    });
  }
  return response.status(200).json(thecontact);
};
