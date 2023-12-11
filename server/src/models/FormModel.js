import mongoose from "mongoose";

/*

  example question
  {
    type : "cat" | "comp" | "fill"
    question: String
    questionImg: String
    ! now depending on the type of question we will change data
    for CAT
    cats : [String]
    options: [{ans : cat}] // answer is key is the cat it belongs to is value

    for FILL
    sentence : [String] // the sentence types will be split on " "
    options : [Number] // the index of word which are to added in the fill up

    for COMP
    passage : String
    questions; [
        {
            question: String,
            options: [String]
            rightOpt: Number // it is the index of right answer
        }
    ]

  }

  as for responses {
    for CAT
    answers: {cat: [ans], ....}
    we can match this against the data stored in the database
    says what categories have what items

    for FILL
    answers: [{text: "abbc", idx : 1}, {text: "def", idx : 4}] 
    says what text appears at what index

    for COMP
    answers: {key, value} // returns the choosen index of the answer
    where key is question number and value is option number
  }
   */

// question stuff
const FromQuestionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["CAT", "FILL", "COMP"],
    required: true,
  },
  question: { type: String },
  image: { type: String },
  data: { type: Object },
});

const FormSchema = new mongoose.Schema({
  formName: { type: String },
  formHeaderImage: { type: String },
  questions: { type: [FromQuestionSchema] },
});

// Response stuff

const FormResonseSchema = new mongoose.Schema({
  formId: { type: mongoose.Types.ObjectId, ref: "Form", required: true },
  answers: { type: [Object] },
});

// Models
const FormModel = mongoose.model("Form", FormSchema);
const FormResponseModel = mongoose.model("FormResponse", FormResonseSchema);
export { FormModel, FormResponseModel };
