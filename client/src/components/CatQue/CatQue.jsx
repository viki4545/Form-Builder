import "./CatQue.css";

import React, { useEffect, useState } from "react";

import { editAnswer } from "../../redux/slices/formSlice";
import { useDispatch } from "react-redux";

const CatQue = ({ question, cats, options, idx, queImage }) => {
  const dispatch = useDispatch();

  const [dragables, setDragables] = useState(options);
  const [widgets, setWidgets] = useState({});

  const handleOnDragStart = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDrop = (e, cat) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    const newDragables = dragables.filter((elm) => elm != widgetType);
    setDragables(newDragables);
    const prevWidgets = widgets[cat] || [];
    setWidgets({ ...widgets, [cat]: [...prevWidgets, widgetType] });
  };

  useEffect(() => {
    dispatch(editAnswer({ idx: idx, data: widgets }));
  }, [widgets]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const resetFillUp = () => {
    setWidgets({});
    setDragables(options);
  };
  return (
    <div className="cat-questions-container">
      <h4>Categorize Question</h4>
      <div className="flex" style={{ height: "10rem" }}>
        <img
          src={queImage}
          style={{ width: "100%", height: "100%" }}
          // src="https://images.template.net/wp-content/uploads/2016/01/Car-Wash-Roll-Up-Banner-Template.jpg"
        />
      </div>
      <p>{question}</p>
      <div className="cat-options">
        {dragables?.map((elm, idx) => {
          return (
            <div
              className="fillup-option"
              draggable
              onDragStart={(e) => {
                handleOnDragStart(e, elm);
              }}
            >
              {elm}
            </div>
          );
        })}
      </div>
      <div className="cats-container">
        {cats?.map((elm, idx) => {
          return (
            <div
              className="single-cat-container"
              onDrop={(e) => {
                handleOnDrop(e, elm);
              }}
              onDragOver={handleDragOver}
            >
              <p>{elm}</p>
              {widgets[elm]?.map((ans, idx) => {
                return <p className="cat-ans">{ans}</p>;
              })}
            </div>
          );
        })}
      </div>
      <button className="submit-button" onClick={resetFillUp}>
        Reset
      </button>
    </div>
  );
};

export default CatQue;
