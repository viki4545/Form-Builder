import "./NewFormRenderer.css";

import CatQue from "../../components/CatQue/CatQue";
import CompQue from "../../components/CompQue/CompQue";
import FillUpQue from "../../components/FillUpQue/FillUpQue";
import React from "react";

const NewFormRenderer = () => {
  const compQueData = {
    passage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat purus eget auctor rhoncus. Sed maximus libero posuere lacus cursus ornare. Etiam viverra lacus hendrerit tortor tincidunt, malesuada cursus elit semper. Cras rutrum lobortis arcu congue lobortis. Pellentesque eget massa sit amet neque auctor rhoncus. Donec augue risus, efficitur a tellus et, eleifend rutrum nisi. Duis vehicula cursus neque ut consectetur. Vestibulum molestie magna nunc, id iaculis nibh elementum quis. Morbi lacinia aliquam tortor, et rutrum tellus pellentesque a. Ut hendrerit, elit in pulvinar molestie, leo elit accumsan elit, eu facilisis purus metus et sem. Maecenas ultrices ex arcu, maximus venenatis nisi interdum venenatis. Sed tincidunt sapien ut ante malesuada molestie. Nunc gravida eget eros non eleifend. Etiam non magna et lectus sagittis finibus. Quisque a mauris tincidunt, ultricies purus at, sodales semMauris tincidunt pharetra sem. Nullam hendrerit feugiat enim at feugiat. Nam blandit accumsan vestibulum. Morbi ullamcorper tristique ipsum, eget rutrum elit mattis quis. Aenean consequat, est et eleifend sodales, nisi augue elementum magna, non rhoncus dui nisi maximus nisl. Suspendisse consequat, diam id porta placerat, purus lacus blandit erat, ac aliquet neque nisi nec erat. Pellentesque at luctus sem. Nam posuere sodales quam. Praesent ex felis, ullamcorper. ",
    questions: [
      {
        question: "This is question",
        options: ["Opt 1", "Opt 2", "Opt 3", "Opt 4"],
      },
      {
        question: "This is question",
        options: ["Opt 1", "Opt 2", "Opt 3", "Opt 4"],
      },
    ],
  };

  const fillQueData = {
    sentence: "Fill in the blank this is option1 this is option2".split(" "),
    options: [3, 6],
  };

  const catQueData = {
    question: "This is a question",
    cats: ["cat1", "cat2", "cat3"],
    options: ["ans1", "ans2", "ans3", "ans4", "ans5"],
  };
  return (
    <div className="new-form-wrap">
      <h1>New Form Renderer</h1>
      <div className="new-form">
        <div className="que-wrap">
          <CatQue
            cats={catQueData.cats}
            options={catQueData.options}
            question={catQueData.question}
          />
        </div>

        <div className="que-wrap">
          <FillUpQue
            sentence={fillQueData.sentence}
            options={fillQueData.options}
          />
        </div>

        <div className="que-wrap">
          <CompQue
            compPassage={compQueData.passage}
            compQuestions={compQueData.questions}
          />
        </div>
      </div>
    </div>
  );
};

export default NewFormRenderer;
