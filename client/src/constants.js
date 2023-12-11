export const ROUTES = {
  ROOT: "/",
  FORM_BUILDER: "/form/builder",
  VEIW_FORMS: "/form/view",
  FILL: (id) => `/form/fill/${id}`,
  RESPONSES: (id) => `/form/responses/${id}`,
  SPECIFIC_RESPONSE: (id) => `/form/responses/specific/${id}`,
};

export const BASE_URL = "https://formbuilder-cph8.onrender.com";
// export const BASE_URL = "http://localhost:5000";
