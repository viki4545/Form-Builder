import "./CompQue.css";

import React, { useEffect, useState } from "react";

import { editAnswer } from "../../redux/slices/formSlice";
import { useDispatch } from "react-redux";

const CompQue = ({ compPassage, compQuestions, question, idx, queImage }) => {
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState({});

  const handleClick = (idx, value) => {
    setAnswers({ ...answers, [idx]: value });
  };

  useEffect(() => {
    dispatch(editAnswer({ idx: idx, data: answers }));
  }, [answers]);

  return (
    <div className="comp-questions">
      <h4>Comprehension Question</h4>
      <div className="flex" style={{ height: "10rem" }}>
        <img
          src={queImage}
          style={{ width: "100%", height: "100%" }}
          // src="https://images.template.net/wp-content/uploads/2016/01/Car-Wash-Roll-Up-Banner-Template.jpg"
        />
      </div>
      <p>{question}</p>
      <p className="passage">{compPassage}</p>
      <div className="mcqs">
        {compQuestions?.map((elm, idx) => {
          return (
            <div className="mcq-que">
              <p className="question">
                {idx + 1}. {elm?.question}
              </p>
              {elm?.options?.map((option, optionIdx) => {
                return (
                  <p
                    className="option"
                    onClick={() => handleClick(idx, optionIdx)}
                  >
                    <span
                      className={
                        answers[idx] == optionIdx
                          ? "option-circle selected"
                          : "option-circle"
                      }
                    >
                      <span>{"\u00A0"}</span>
                    </span>
                    {option}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompQue;
