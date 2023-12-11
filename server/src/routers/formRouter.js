import {
  createFormNController,
  deleteFormNController,
  getAllFormsNController,
  getFormByIdNController,
  getFormResponesesNController,
  getResoponseByIdController,
  handleFormResponseNController,
} from "../controllers/FormController.js";

import { Router } from "express";

const FormRouter = Router();

FormRouter.post("/", createFormNController);
FormRouter.get("/response/:id", getFormResponesesNController);
FormRouter.get("/response_specific/:id", getResoponseByIdController);
FormRouter.post("/response/:id", handleFormResponseNController);
FormRouter.delete("/:id", deleteFormNController);
FormRouter.get("/:id", getFormByIdNController);
FormRouter.get("/", getAllFormsNController);

export { FormRouter };
