import { all, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  GET_STUDENTS_REQUEST,
  ADD_STUDENT_REQUEST,
  GET_STUDENT_REQUEST,
  UPDATE_STUDENT_REQUEST,
  DELETE_STUDENT_REQUEST,
  addStudentSuccess,
  addStudentFailed,
  getStudentsSuccess,
  getStudentsFailed,
  getStudentSuccess,
  getStudentFailed,
  updateStudentSuccess,
  updateStudentFailed,
  deleteStudentSuccess,
  deleteStudentFailed,
} from "../actions/students";
import request from "../../utils/api";

/**
 * Get all students
 */
function* getStudents() {
  try {
    const response = yield request("/api/students");
    yield put(getStudentsSuccess(response.students));
  } catch (error) {
    toast.error("Something went wrong when fetching students");
    console.log(error);
    yield put(getStudentsFailed(error));
  }
}

/**
 * Call API to add a student
 *
 * @param {Object} payload - Data received from action creator
 * @param {String} payload.first_name - First name of the student
 * @param {String} payload.last_name - Last name of the student
 * @param {String} payload.email - Email of the student
 */
function* addStudent({ payload }) {
  try {
    const response = yield request("/api/students/create", "POST", payload);
    toast.success(response.message);
    yield put(addStudentSuccess());
  } catch (error) {
    toast.error("Something went wrong.");
    console.log("addStudent Error", error);
    yield put(addStudentFailed(error));
  }
}

/**
 * Get details of a specific student
 *
 * @param {Object} payload - Data received from action creator
 * @param {Number} payload.id - ID of the student
 */
function* getStudent({ payload }) {
  try {
    const response = yield request(`/api/students/${payload.id}`);
    yield put(getStudentSuccess(response.student));
  } catch (error) {
    toast.error("Something went wrong fetching student details");
    console.log(error);
    yield put(getStudentFailed(error));
  }
}

/**
 * Update the details of a student
 *
 * @param {Object} payload - Request body
 * @param {Number} payload.id - ID of the student
 * @param {string} payload.first_name - First name of the student
 * @param {string} payload.last_name - Last name of the student
 * @param {string} payload.email - Email of the student
 */
function* updateStudent({ payload }) {
  try {
    const response = yield request(
      `/api/students/${payload.id}/update`,
      "POST",
      payload
    );
    toast.success(response.message);
    yield put(updateStudentSuccess(response.student));
  } catch (error) {
    toast.error("Something went wrong when trying to update student details");
    console.log(error);
    yield put(updateStudentFailed(error));
  }
}

/**
 * Delete a student
 *
 * @param {Object} payload - Request body
 * @param {Number} payload.id - ID of the student
 */
function* deleteStudent({ payload }) {
  try {
    const response = yield request(
      `/api/students/${payload.id}/delete`,
      "POST"
    );
    toast.success(response.message);
    yield put(deleteStudentSuccess());
  } catch (error) {
    toast.error("Something went wrong deleting the student.");
    console.log("deleteStudent error", error);
    yield put(deleteStudentFailed());
  }
}

/**
 * Watch then catch requests from user
 */
function* watchRequests() {
  yield all([
    takeLatest(GET_STUDENTS_REQUEST, getStudents),
    takeLatest(ADD_STUDENT_REQUEST, addStudent),
    takeLatest(GET_STUDENT_REQUEST, getStudent),
    takeLatest(UPDATE_STUDENT_REQUEST, updateStudent),
    takeLatest(DELETE_STUDENT_REQUEST, deleteStudent),
  ]);
}

export default watchRequests;
