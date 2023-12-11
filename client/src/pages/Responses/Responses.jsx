import "./Response.css";

import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import React from "react";
import { useGetFormResponsesQuery } from "../../redux/slices/formApi";
import { useParams } from "react-router";

const NewResponses = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error } = useGetFormResponsesQuery(id);
  return (
    <div className="response-container">
      <>
        <h2>{data?.data?.form?.formName}</h2>
        <div className="all-responses-container">
          <div className="responses-header-container">
            <div className="left-header">
              <p>UserId</p>
            </div>
            <div className="right-header">
              <p>All Responses</p>
            </div>
          </div>
          {data?.data?.responses?.map((elm, idx) => (
            <div className="responses-header-container">
              <div className="left-header">
                <p>{elm?._id}</p>
              </div>
              <div className="right-header">
                <Link to={ROUTES.SPECIFIC_RESPONSE(elm?._id)}>
                  View Response
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default NewResponses;
