import {
  GET_STUDENTS_REQUEST,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_FAILED,
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILED,
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAILED,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILED,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILED,
} from "../actions/students";

const initialState = {
  isLoading: false,
  students: [],
  student: {
    first_name: "",
    last_name: "",
    email: "",
  },
  error: null,
  actionType: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STUDENTS_REQUEST:
    case ADD_STUDENT_REQUEST:
    case GET_STUDENT_REQUEST:
    case UPDATE_STUDENT_REQUEST:
    case DELETE_STUDENT_REQUEST:
      return { ...state, isLoading: true };

    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        students: payload,
        actionType: type,
      };

    case ADD_STUDENT_SUCCESS:
      return { ...state, isLoading: false, actionType: type };

    case GET_STUDENT_SUCCESS:
    case UPDATE_STUDENT_SUCCESS:
      return { ...state, isLoading: false, student: payload, actionType: type };

    case DELETE_STUDENT_SUCCESS:
      return { ...state, isLoading: false, actionType: type };

    case GET_STUDENTS_FAILED:
    case ADD_STUDENT_FAILED:
    case GET_STUDENT_FAILED:
    case UPDATE_STUDENT_FAILED:
    case DELETE_STUDENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        actionType: type,
      };

    default:
      return state;
  }
};

export default reducer;
