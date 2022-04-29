import request from "../../utils/api";

export const getStudents = () => request("/get-students-endpoint");
