import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudent,
  updateStudent,
  UPDATE_STUDENT_SUCCESS,
} from "../../redux/actions/students";

const EditStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const student = useSelector((state) => state.students.student);
  const actionType = useSelector((state) => state.students.actionType);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  // Fetch the details of the student
  useEffect(() => {
    dispatch(getStudent({ id: params.id }));
  }, []);

  // Set student details
  useEffect(() => {
    setFirstname(student.first_name);
    setLastname(student.last_name);
    setEmail(student.email);
  }, [student]);

  useEffect(() => {
    switch (actionType) {
      case UPDATE_STUDENT_SUCCESS:
        navigate("/");
        break;

      default:
        break;
    }
  }, [actionType]);

  const handleSubmit = () => {
    const payload = {
      id: params.id,
      first_name: firstname,
      last_name: lastname,
      email,
    };
    dispatch(updateStudent(payload));
  };

  const backToHome = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" component="h1">
          Edit Student
        </Typography>
        <Button size="large" onClick={backToHome}>
          Back
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ my: 1 }}>
        <Grid item xs={12} md={6}>
          <TextField
            label="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
      <Button variant="contained" size="large" onClick={handleSubmit} fullWidth>
        Update
      </Button>
    </>
  );
};

export default EditStudent;
