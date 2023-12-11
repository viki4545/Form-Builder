import "./SpecificResponse.css";

import React from "react";
import { useGetSpecificFormResponseQuery } from "../../redux/slices/formApi";
import { useParams } from "react-router";

const CatAnsRender = ({ idx, queData, ansData }) => {
  const expectedAnswer = {};
  queData?.data?.options?.forEach((elm, idx) => {
    const key = Object.values(elm)?.[0];
    const value = Object.keys(elm)?.[0];
    expectedAnswer[[key]] = [...(expectedAnswer[key] || []), value];
  });
  return (
    <div className="specific-response-container">
      <p>
        {idx + 1}
        {". " + queData?.question}
      </p>
      <p>Expected Answer : </p>
      <p>{JSON.stringify(expectedAnswer)}</p>
      <p>Answer Given : </p>
      <p>{JSON.stringify(ansData)}</p>
    </div>
  );
};

const FillAnsRender = ({ idx, queData, ansData }) => {
  const responseRec = ansData?.map((elm) => elm?.idx);
  return (
    <div className="specific-response-container">
      <p>
        {idx + 1}
        {". " + queData?.question}
      </p>
      <p>Expected Answer : </p>
      <p>{JSON.stringify(queData?.data?.options)}</p>
      <p>Answer Given : </p>
      <p>{JSON.stringify(responseRec)}</p>
    </div>
  );
};

const CompAnsRender = ({ idx, queData, ansData }) => {
  const expectedAns = queData?.data?.questions?.map((elm) => elm?.rightOpt);
  return (
    <div className="specific-response-container">
      <p>
        {idx + 1}
        {". " + queData?.question}
      </p>
      <p>Expected Answer : </p>
      <p>{JSON.stringify(expectedAns)}</p>
      <p>Answer Given : </p>
      <p>{JSON.stringify(Object.values(ansData))}</p>
    </div>
  );
};

const AnswerRenderer = (type, idx, qData, aData) => {
  switch (type) {
    case "CAT":
      return <CatAnsRender idx={idx} queData={qData} ansData={aData} />;
    case "FILL":
      return <FillAnsRender idx={idx} queData={qData} ansData={aData} />;
    case "COMP":
      return <CompAnsRender idx={idx} queData={qData} ansData={aData} />;
  }
};

const SpecificResponse = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error } =
    useGetSpecificFormResponseQuery(id);

  return (
    <div>
      <h3>Response for userid {data?.data?._id}</h3>
      <div className="specific-response-container" style={{ border: "none" }}>
        {data?.data?.formId?.questions?.map((elm, idx) =>
          AnswerRenderer(elm?.type, idx, elm, data?.data?.answers[idx])
        )}
      </div>
    </div>
  );
};

export default SpecificResponse;
