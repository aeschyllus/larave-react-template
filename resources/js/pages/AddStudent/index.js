import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_STUDENT_SUCCESS,
  addStudent,
  resetActionType,
} from "../../redux/actions/students";

const AddStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const actionType = useSelector((state) => state.students.actionType);

  useEffect(() => {
    switch (actionType) {
      case ADD_STUDENT_SUCCESS:
        navigate("/");
        break;

      default:
        break;
    }
    dispatch(resetActionType());
  }, [actionType]);

  const handleSubmit = () => {
    const payload = { first_name: firstname, last_name: lastname, email };
    dispatch(addStudent(payload));
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
          Add Student
        </Typography>
        <Button size="large" onClick={() => navigate("/")}>
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
        Add
      </Button>
    </>
  );
};

export default AddStudent;
