import { Request, Response, Router } from "express";
import { body } from "express-validator";
const ContactRouter: Router = Router();

// ContactRouter.get("/home", (request: Request, response: Response) => {
//     response.status(200).json({
//         msg: "Welcome to home"
//     })
// })
// ContactRouter.post("/insertUser", (request: Request, response: Response) => {
//     response.status(200).json({
//         msg: "DataInserted.."
//     })
// })

// @usage  : get user by id
// @method : get
// @params : contactId
// @url    :http://127.0.0.1:9797/contact/:contactId

import * as ContactController from "../controller/contactController";

ContactRouter.get(
  "/:contactId",
  async (request: Request, response: Response) => {
    await ContactController.getcontact(request, response);
  }
);

// @usage  : get all contact
// @method : get
// @params : no-params
// @url    :http://127.0.0.1:9797/contact

ContactRouter.get("/", async (request: Request, response: Response) => {
  await ContactController.getAllcontact(request, response);
});

//post
ContactRouter.post(
  "/",
  [body("name").not().isEmpty().withMessage("Name is Required")],
  [body("imageUrl").not().isEmpty().withMessage("Email is Required")],
  [body("mobile").not().isEmpty().withMessage("Image is Required")],
  [body("email").not().isEmpty().withMessage("Password is Required")],
  [body("company").not().isEmpty().withMessage("company is Required")],
  async (request: Request, response: Response) => {
    console.log("post");
    await ContactController.createcontact(request, response);
  }
);

// update
ContactRouter.put(
  "/:contactId",
  async (request: Request, response: Response) => {
    await ContactController.updatecontact(request, response);
  }
);

// delete
ContactRouter.delete(
  "/:contactId",
  async (request: Request, response: Response) => {
    await ContactController.deletecontact(request, response);
  }
);
export default ContactRouter;
