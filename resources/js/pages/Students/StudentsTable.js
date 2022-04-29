import React, { useEffect } from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DELETE_STUDENT_SUCCESS,
  deleteStudent,
  getStudents,
} from "../../redux/actions/students";

const StudentsTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const actionType = useSelector((state) => state.students.actionType);

  useEffect(() => {
    switch (actionType) {
      case DELETE_STUDENT_SUCCESS:
        dispatch(getStudents());
        break;

      default:
        break;
    }
  }, [actionType]);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "80vh" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>First Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Last Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.first_name}</TableCell>
              <TableCell>{student.last_name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => navigate(`/students/${student.id}/edit`)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => dispatch(deleteStudent({ id: student.id }))}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentsTable;
