import "./FormBuilder.css";

import {
  CATAddCategory,
  CATAddOption,
  COMPAddQue,
  COMPPassageChange,
  FILLAddOption,
  FILLChangeSentence,
  changeFormName,
  changeQuestion,
} from "../../redux/slices/formSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategorizeBuilder = ({ idx }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [option, setOption] = useState({ key: "", value: "" });
  const questions = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.questions
  );

  const handleAddCategory = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(CATAddCategory({ idx: idx, cat: category }));
      setCategory("");
    }
  };
  const handleAddOption = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(
        CATAddOption({
          idx: idx,
          option: {
            [option.key]: option.value || questions?.[idx]?.data?.cats?.[0],
          },
        })
      );
      setOption({ key: "", value: "" });
    }
  };

  return (
    <div>
      <div className="catz-categories-container">
        <p>Categories</p>
        {questions?.[idx]?.data?.cats?.map((elm, idx) => {
          return <div className="catz-categories">{elm}</div>;
        })}
      </div>

      <input
        type="text"
        placeholder="Add Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        onKeyDown={handleAddCategory}
      />
      <div className="catz-options-container">
        <p>Options</p>
        {questions?.[idx]?.data?.options?.map((elm, idx) => {
          return (
            <div className="catz-categories">
              {Object.keys(elm)?.[0]} : {Object.values(elm)?.[0]}
            </div>
          );
        })}
      </div>
      <div className="option-adding">
        <input
          type="text"
          placeholder="Add option"
          value={option.key}
          onChange={(e) => setOption({ ...option, key: e.target.value })}
          onKeyDown={handleAddOption}
        />
        <div class="select-wrapper">
          <select
            class="select"
            onChange={(e) => {
              setOption({ ...option, value: e.target.value });
            }}
          >
            {questions?.[idx]?.data?.cats?.map((elm, idx) => {
              return <option value={elm}>{elm}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};
const FillUpBuilder = ({ idx }) => {
  const dispatch = useDispatch();
  const [fillUp, setFillUp] = useState("");
  const questions = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.questions
  );

  const handleChangeFillUp = (e) => {
    dispatch(FILLChangeSentence({ idx: idx, sentence: e.target.value }));
  };

  const handleAddOption = (option) => {
    const index = questions?.[idx]?.data?.sentence?.indexOf(option);
    dispatch(FILLAddOption({ idx: idx, option: index }));
  };

  return (
    <div>
      <div className="fillup-option-container">
        <p>Selected Options</p>
        {questions?.[idx]?.data?.options?.map((elm) => {
          console.log(
            elm,
            questions?.[idx]?.data?.sentence,
            questions?.[idx]?.data?.sentence?.[elm]
          );
          return <div>{questions?.[idx]?.data?.sentence?.[elm]}</div>;
        })}
      </div>
      <input
        type="text"
        placeholder="Enter the sentence for fill up"
        value={questions?.[idx]?.data?.sentence?.join(" ")}
        onChange={handleChangeFillUp}
      />
      <div className="fillup-option-container">
        <p>Select Options</p>
        {questions?.[idx]?.data?.sentence?.map((elm, senIdx) => {
          if (questions?.[idx]?.data?.options?.includes(senIdx)) {
            return;
          }
          return <div onClick={() => handleAddOption(elm)}>{elm}</div>;
        })}
      </div>
    </div>
  );
};

const ComprehensionBuilder = ({ idx }) => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.questions
  );

  const [newQuestion, setNewQuestion] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [options, setOptions] = useState([]);
  const [rightAnswer, setRightAnswer] = useState(0);

  const handlePassageChange = (e) => {
    dispatch(COMPPassageChange({ idx: idx, passage: e.target.value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setOptions([...options, optionValue]);
      setOptionValue("");
    }
  };

  const handleAddQuestion = () => {
    setNewQuestion("");
    setOptions([]);
    dispatch(
      COMPAddQue({
        idx: idx,
        question: {
          question: newQuestion,
          rightOpt: rightAnswer,
          options: options,
        },
      })
    );
  };
  return (
    <div>
      <div className="comp-container">
        <p>Add passage</p>
        <textarea
          placeholder="Enter the passage"
          value={questions?.data?.passage}
          onChange={handlePassageChange}
        />
      </div>
      <div className="comp-question-container">
        {questions[idx]?.data?.questions?.map((elm, queIdx) => {
          return (
            <div className="comp-question">
              <p>
                {queIdx + 1}
                {". " + elm?.question}
              </p>
              {elm?.options?.map((opt, optIdx) => {
                return (
                  <div className="option">
                    <span
                      className={
                        elm?.rightOpt == optIdx
                          ? "option-circle selected"
                          : "option-circle"
                      }
                    >
                      <span>{"\u00A0"}</span>
                    </span>
                    {opt}
                  </div>
                );
              })}
            </div>
          );
        })}

        <div className="comp-question">
          <p>Add Question</p>
          <input
            type="text"
            value={newQuestion}
            placeholder="Enter new question"
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          {options?.map((elm, optionIdx) => {
            return (
              <div
                className="option"
                onClick={() => {
                  setRightAnswer(optionIdx);
                }}
              >
                <span
                  className={
                    rightAnswer == optionIdx
                      ? "option-circle selected"
                      : "option-circle"
                  }
                >
                  <span>{"\u00A0"}</span>
                </span>
                {elm}
              </div>
            );
          })}
          <input
            type="text"
            value={optionValue}
            placeholder="Add option"
            onChange={(e) => setOptionValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button className="submit-button" onClick={handleAddQuestion}>
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
};

const NewFormBuilder = () => {
  const dispatch = useDispatch();

  const [queImage, setQueImage] = useState([]);

  const formName = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.formName
  );
  const questions = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.questions
  );

  console.log(questions);

  const getType = (type) => {
    switch (type) {
      case "CAT":
        return "Categorize";
      case "FILL":
        return "Fill up";
      case "COMP":
        return "Comprehension";
    }
  };

  const getBuilder = (type, idx) => {
    switch (type) {
      case "CAT":
        return <CategorizeBuilder idx={idx} />;
      case "FILL":
        return <FillUpBuilder idx={idx} />;
      case "COMP":
        return <ComprehensionBuilder idx={idx} />;
    }
  };

  const handleFormName = (e) => {
    dispatch(changeFormName(e.target.value));
  };

  const handleQuestionChange = (e, idx) => {
    dispatch(
      changeQuestion({
        idx: idx,
        image: queImage[idx],
        question: e.target.value,
      })
    );
  };

  return (
    <div className="form-builder-container">
      <p>Note : Press Enter on inputs to create entries</p>
      <h2>Form Builder</h2>
      <input
        type="text"
        placeholder="Add form Name !"
        value={formName}
        onChange={handleFormName}
      />
      <div className="builder-question-container">
        {questions?.map((elm, idx) => {
          return (
            <div className="builder-question-inner-container">
              <h4>
                Que No {idx + 1} : {getType(elm?.type)}
              </h4>

              <label htmlFor="question-image">Add link to question Image</label>
              <input
                type="text"
                name="image"
                value={queImage[idx]}
                onChange={(e) => setQueImage([...queImage, e.target.value])}
              />

              <input
                type="text"
                placeholder="Add question !"
                value={elm?.question}
                onChange={(e) => handleQuestionChange(e, idx)}
              />
              {getBuilder(elm?.type, idx)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewFormBuilder;
