export const GET_STUDENTS_REQUEST = "GET_STUDENTS_REQUEST";
export const GET_STUDENTS_SUCCESS = "GET_STUDENTS_SUCCESS";
export const GET_STUDENTS_FAILED = "GET_STUDENTS_FAILED";

export const ADD_STUDENT_REQUEST = "ADD_STUDENT_REQUEST";
export const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS";
export const ADD_STUDENT_FAILED = "ADD_STUDENT_FAILED";

export const GET_STUDENT_REQUEST = "GET_STUDENT_REQUEST";
export const GET_STUDENT_SUCCESS = "GET_STUDENT_SUCCESS";
export const GET_STUDENT_FAILED = "GET_STUDENT_FAILED";

export const UPDATE_STUDENT_REQUEST = "UPDATE_STUDENT_REQUEST";
export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const UPDATE_STUDENT_FAILED = "UPDATE_STUDENT_FAILED";

export const DELETE_STUDENT_REQUEST = "DELETE_STUDENT_REQUEST";
export const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
export const DELETE_STUDENT_FAILED = "DELETE_STUDENT_FAILED";

export const RESET_ACTION_TYPE = "RESET_ACTION_TYPE";

/**
 * Get all students action creator
 */
export const getStudents = () => ({ type: GET_STUDENTS_REQUEST });

/**
 * Invoked when students successfully fetched
 *
 * @param {Object} payload - Array of students
 * @param {Object[]} payload.students - Array of students
 */
export const getStudentsSuccess = (payload) => ({
  type: GET_STUDENTS_SUCCESS,
  payload,
});

/**
 * Invoked when there is an error fetching the students
 *
 * @param {Object} payload - Error object thrown
 */
export const getStudentsFailed = (payload) => ({
  type: GET_STUDENTS_FAILED,
  payload,
});

/**
 * Send a request to add a student
 *
 * @param {Object} payload - Request body
 * @param {String} payload.first_name - First name of the student
 * @param {String} payload.last_name - Last name of the student
 * @param {String} payload.email - Email of the student
 */
export const addStudent = (payload) => ({ type: ADD_STUDENT_REQUEST, payload });

/**
 * Invoked when student is successfully added
 */
export const addStudentSuccess = () => ({ type: ADD_STUDENT_SUCCESS });

/**
 * Invoked when student is not successfully added
 */
export const addStudentFailed = (payload) => ({
  type: ADD_STUDENT_FAILED,
  payload,
});

/**
 * Get details of a specific student
 *
 * @param {Object} payload - Requet Body
 * @param {Number} payload.id - ID of the student
 */
export const getStudent = (payload) => ({
  type: GET_STUDENT_REQUEST,
  payload,
});

/**
 * Invoked when student details is successfully fetched
 *
 * @param {Object} payload - Response body
 * @param {Number} payload.id - ID of the student
 * @param {string} payload.first_name - First name of the student
 * @param {string} payload.last_name - Last name of the student
 * @param {string} payload.email - Email of the student
 */
export const getStudentSuccess = (payload) => ({
  type: GET_STUDENT_SUCCESS,
  payload,
});

/**
 * Invoked when student details is not successfully fetched
 */
export const getStudentFailed = (payload) => ({
  type: GET_STUDENT_FAILED,
  payload,
});

/**
 * Update student details request
 *
 * @param {Object} payload - Request body
 * @param {Number} payload.id - ID of the student
 * @param {string} payload.first_name - First name of the student
 * @param {string} payload.last_name - Last name of the student
 * @param {string} payload.email - Email of the student
 */
export const updateStudent = (payload) => ({
  type: UPDATE_STUDENT_REQUEST,
  payload,
});

/**
 * Invoked when student details is successfully updated
 */
export const updateStudentSuccess = (payload) => ({
  type: UPDATE_STUDENT_SUCCESS,
  payload,
});

/**
 * Invoked when student details update failed
 */
export const updateStudentFailed = (payload) => ({
  type: UPDATE_STUDENT_FAILED,
  payload,
});

/**
 * Delete a student from the table
 *
 * @param {Object} payload - Request body
 * @param {Number} payload.id - ID of the student
 */
export const deleteStudent = (payload) => ({
  type: DELETE_STUDENT_REQUEST,
  payload,
});

/**
 * Invoked when the student is successfully deleted
 */
export const deleteStudentSuccess = () => ({ type: DELETE_STUDENT_SUCCESS });

/**
 * Invoked when deletion of the student failed
 */
export const deleteStudentFailed = (payload) => ({
  type: DELETE_STUDENT_FAILED,
  payload,
});

/**
 * Reset the action type back to an empty string
 */
export const resetActionType = () => ({ type: RESET_ACTION_TYPE });
