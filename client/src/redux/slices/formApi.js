import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../../constants";

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    createForm: builder.mutation({
      query: (body) => ({
        url: "/form",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["forms"],
    }),
    getForms: builder.query({
      query: () => "/form",
      providesTags: ["forms"],
    }),
    getFormId: builder.query({
      query: (id) => `/form/${id}`,
      providesTags: ["forms", "id"],
    }),
    deleteForm: builder.mutation({
      query: (id) => ({
        url: `/form/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["forms", "id"],
    }),
    submitForm: builder.mutation({
      query: (data) => ({
        url: `/form/response/${data.id}`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: ["forms", "id", "responses"],
    }),
    getFormResponses: builder.query({
      query: (id) => `/form/response/${id}`,
      providesTags: ["forms", "responses"],
    }),
    getSpecificFormResponse: builder.query({
      query: (id) => `/form/response_specific/${id}`,
      providesTags: ["forms", "responses"],
    }),
  }),
});

export const {
  useCreateFormMutation,
  useGetFormsQuery,
  useGetFormIdQuery,
  useDeleteFormMutation,
  useSubmitFormMutation,
  useGetFormResponsesQuery,
  useGetSpecificFormResponseQuery,
} = formApi;
