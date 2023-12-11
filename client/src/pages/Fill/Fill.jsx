import "../FormRenderer/FormRenderer.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetFormIdQuery,
  useSubmitFormMutation,
} from "../../redux/slices/formApi";
import { useNavigate, useParams } from "react-router";

import CatQue from "../../components/CatQue/CatQue";
import CompQue from "../../components/CompQue/CompQue";
import FillUpQue from "../../components/FillUpQue/FillUpQue";
import { ROUTES } from "../../constants";
// import { changeFormId } from "../../redux/slices/newFormSlice";

const ReturnQuestion = (type, idx, data) => {
  switch (type) {
    case "CAT":
      const opts = data?.data?.options?.map((elm) => Object.keys(elm)[0]);
      return (
        <CatQue
          queImage={data?.image}
          question={data?.question}
          options={opts || []}
          cats={data?.data?.cats}
          idx={idx}
        />
      );
    case "FILL":
      return (
        <FillUpQue
          queImage={data?.image}
          options={data?.data?.options}
          sentence={data?.data?.sentence}
          question={data?.question}
          idx={idx}
        />
      );
    case "COMP":
      return (
        <CompQue
          queImage={data?.image}
          compPassage={data?.data?.passage}
          compQuestions={data?.data?.questions}
          question={data?.question}
          idx={idx}
        />
      );
  }
};

const NewFill = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const submitData = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.submitData
  );

  const { data, isLoading, error, isSuccess } = useGetFormIdQuery(id);
  const [submitForm, results] = useSubmitFormMutation();

  const handleSubmit = () => {
    submitForm({ id: id, body: { answers: submitData?.responses } });
  };

  useEffect(() => {
    if (results.isSuccess) {
      navigate(ROUTES.VEIW_FORMS);
    }
  }, [results.isLoading]);
  return (
    <div className="new-form-wrap">
      <h2>{data?.data?.form?.formName}</h2>
      {data?.data?.form?.formHeaderImage && (
        <div className="flex" style={{ height: "20rem" }}>
          <img
            src={data?.data?.form?.formHeaderImage}
            style={{ width: "100%", height: "100%" }}
            // src="https://images.template.net/wp-content/uploads/2016/01/Car-Wash-Roll-Up-Banner-Template.jpg"
          />
        </div>
      )}
      <div className="new-form">
        {data?.data?.form?.questions?.map((elm, idx) => {
          return (
            <div className="que-wrap">
              {ReturnQuestion(elm?.type, idx, elm)}
            </div>
          );
        })}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit form
      </button>
    </div>
  );
};

export default NewFill;
