import React from "react";
import { Box, Paper } from "@mui/material";

const CustomContainer = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a2027",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={8}
        sx={{ padding: 2, borderRadius: 3, maxWidth: "90vw" }}
      >
        {props.children}
      </Paper>
    </Box>
  );
};

export default CustomContainer;
