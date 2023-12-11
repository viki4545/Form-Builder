import {
  createFormNService,
  deleteFormNService,
  getAllFormNService,
  getFormByIdNService,
  getFormResponseNService,
  getResoponseByIdService,
  handleFormResponseNService,
} from "../service/FormService.js";

const createFormNController = async (req, res, next) => {
  try {
    console.log(req.body);
    const form = await createFormNService(req.body);
    if (form) {
      return res.status(200).json({
        success: true,
        message: "Form created",
        errors: [],
        data: { form },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not get form",
      errors: [],
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

const getAllFormsNController = async (req, res, next) => {
  try {
    const forms = await getAllFormNService();
    if (forms) {
      return res.status(200).json({
        success: true,
        message: "Forms found",
        errors: [],
        data: { forms: forms },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not get forms",
      errors: [],
      data: { forms: [] },
    });
  } catch (error) {
    next(error);
  }
};

const getFormByIdNController = async (req, res, next) => {
  try {
    const form = await getFormByIdNService(req.params?.id);
    if (form) {
      return res.status(200).json({
        success: true,
        message: "Form found",
        errors: [],
        data: { form: form },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not get form",
      errors: [],
      data: { form: {} },
    });
  } catch (error) {
    next(error);
  }
};

const deleteFormNController = async (req, res, next) => {
  try {
    const form = await deleteFormNService(req.params?.id);
    if (form) {
      return res.status(200).json({
        success: true,
        message: "Form found",
        errors: [],
        data: { form: form },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not get form",
      errors: [],
      data: { form: {} },
    });
  } catch (error) {
    next(error);
  }
};

const handleFormResponseNController = async (req, res, next) => {
  try {
    console.log(req.params.id, req.body.answers);
    const response = await handleFormResponseNService(
      req.params.id,
      req.body.answers
    );

    if (response) {
      return res.status(200).json({
        success: true,
        message: "Response Recorded",
        errors: [],
        data: { response: response },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not record response",
      errors: [],
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

const getFormResponesesNController = async (req, res, next) => {
  try {
    const form = await getFormResponseNService(req.params?.id);
    if (form) {
      return res.status(200).json({
        success: true,
        message: "Form found",
        errors: [],
        data: form,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not get form",
      errors: [],
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

const getResoponseByIdController = async (req, res, next) => {
  try {
    const form = await getResoponseByIdService(req.params?.id);
    if (form) {
      return res.status(200).json({
        success: true,
        message: "Form found",
        errors: [],
        data: form,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not get form",
      errors: [],
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export {
  createFormNController,
  getAllFormsNController,
  getFormByIdNController,
  deleteFormNController,
  handleFormResponseNController,
  getFormResponesesNController,
  getResoponseByIdController,
};
