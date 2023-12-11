import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  errorData: {
    message: "",
    type: "",
    errors: [],
  },
  isError: false,
  /*

  example question
  {
    type : "cat" | "comp" | "fill"
    question: String
    questionImg: String
    ! now depending on the type of question we will change options
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
   */
  data: {
    questions: [],
    formName: "Change Form Name",
    submitData: {
      formId: "",
      responses: [],
    },
    formHeaderImage: "",
  },
  status: {},
};

const newFormSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setHeaderImage: (state, { payload }) => {
      state.data.formHeaderImage = payload;
    },
    setQuestionImage: (state, { payload }) => {
      state.data.questionImage = payload;
    },
    changeFormName: (state, { payload }) => {
      state.data.formName = payload;
    },
    addQ: (state, { payload }) => {
      state.data.questions = [...state.data.questions, payload];
    },
    changeQuestion: (state, { payload }) => {
      console.log(payload);
      let modQue = state.data.questions[payload.idx];
      modQue = { ...modQue, image: payload.image, question: payload.question };
      state.data.questions.splice(payload.idx, 1, modQue);
    },
    CATAddCategory: (state, { payload }) => {
      let modQue = state.data.questions[payload.idx];
      modQue = {
        ...modQue,
        data: {
          ...(modQue?.data || {}),
          cats: [...(modQue?.data?.cats || []), payload.cat],
        },
      };
      state.data.questions.splice(payload.idx, 1, modQue);
    },
    CATAddOption: (state, { payload }) => {
      let modQue = state.data.questions[payload.idx];
      modQue = {
        ...modQue,
        data: {
          ...(modQue?.data || {}),
          options: [...(modQue?.data?.options || []), payload.option],
        },
      };
      state.data.questions.splice(payload.idx, 1, modQue);
    },
    FILLChangeSentence: (state, { payload }) => {
      let modQue = state.data.questions[payload.idx];
      modQue = {
        ...modQue,
        data: {
          ...(modQue?.data || {}),
          sentence: payload.sentence.split(" "),
        },
      };
      state.data.questions.splice(payload.idx, 1, modQue);
    },
    FILLAddOption: (state, { payload }) => {
      let modQue = state.data.questions[payload.idx];
      modQue = {
        ...modQue,
        data: {
          ...(modQue?.data || {}),
          options: [...(modQue?.data?.options || []), payload.option],
        },
      };
      state.data.questions.splice(payload.idx, 1, modQue);
    },
    COMPPassageChange: (state, { payload }) => {
      let modQue = state.data.questions[payload.idx];
      modQue = {
        ...modQue,
        data: {
          ...(modQue?.data || {}),
          passage: payload.passage,
        },
      };
      state.data.questions.splice(payload.idx, 1, modQue);
    },
    COMPAddQue: (state, { payload }) => {
      let modQue = state.data.questions[payload.idx];
      modQue = {
        ...modQue,
        data: {
          ...(modQue?.data || {}),
          questions: [...(modQue?.data?.questions || []), payload.question],
        },
      };
      state.data.questions.splice(payload.idx, 1, modQue);
    },

    editAnswer: (state, { payload }) => {
      state.data.submitData.responses[payload.idx] = payload.data;
    },
  },
});

export default newFormSlice.reducer;
export const {
  setHeaderImage,
  setQuestionImage,
  addQ,
  changeQuestion,
  changeFormName,
  CATAddCategory,
  CATAddOption,
  FILLChangeSentence,
  FILLAddOption,
  COMPPassageChange,
  COMPAddQue,
  editAnswer,
} = newFormSlice.actions;
