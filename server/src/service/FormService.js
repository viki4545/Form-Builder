import { FormModel, FormResponseModel } from "../models/FormModel.js";

const createFormNService = async (data) => {
  return await FormModel.create(data);
};

const getAllFormNService = async () => {
  return await FormModel.find({});
};

const getFormByIdNService = async (formId) => {
  return await FormModel.findById(formId);
};

const deleteFormNService = async (formId) => {
  return await FormModel.findByIdAndDelete(formId);
};

const handleFormResponseNService = async (formId, response) => {
  console.log("Inside service");
  console.log(formId, response);
  return await FormResponseModel.create({
    formId: formId,
    answers: response,
  });
};

const getFormResponseNService = async (formId) => {
  const responses = await FormResponseModel.find({ formId: formId });
  const form = await FormModel.findById(formId);
  return { responses, form };
};

const getResoponseByIdService = async (formId) => {
  return await FormResponseModel.findById(formId).populate({
    path: "formId",
  });
};

export {
  createFormNService,
  getAllFormNService,
  getFormByIdNService,
  deleteFormNService,
  handleFormResponseNService,
  getFormResponseNService,
  getResoponseByIdService,
};
