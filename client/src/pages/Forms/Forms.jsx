import "./Forms.css";
import {
  useDeleteFormMutation,
  useGetFormsQuery,
} from "../../redux/slices/formApi";

import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import React from "react";

const NewForms = () => {
  const getForms = useGetFormsQuery();
  const [deleteForm, result] = useDeleteFormMutation();
  return (
    <div className="forms-container">
      <h2>Forms</h2>
      <div className="forms-table">
        <div className="forms-table-header">
          <p>Sr No</p>
          <p>Form Name</p>
          <p>Responses</p>
          <p>Fill</p>
          <p>Delete</p>
        </div>

        {getForms.data?.data?.forms?.map((elm, idx) => {
          return (
            <div className="forms-row-container">
              <p>{idx + 1}.</p>
              <p>{elm?.formName}</p>

              <Link to={ROUTES.RESPONSES(elm?._id)}>Responses</Link>

              <Link to={ROUTES.FILL(elm?._id)}>Fill</Link>

              <button
                className="submit-button"
                onClick={() => deleteForm(elm?._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewForms;
