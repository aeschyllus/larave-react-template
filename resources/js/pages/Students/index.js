import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../redux/actions/students";
import StudentsTable from "./StudentsTable";

const Students = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector((state) => state.students.students);

  // You can also select the whole state then destructure
  // it to get the specific data
  //
  // e.g.
  // const state = useSelector(state => state.students)
  // const { students } = state

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography variant="h4" component="h1">
          Students
        </Typography>
        <Button size="large" onClick={() => navigate("/students/create")}>
          Add Student
        </Button>
      </Box>
      {students.length > 0 ? (
        <StudentsTable />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" component="p">
            No students yet
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Students;
