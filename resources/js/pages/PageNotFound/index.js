import React from "react";
import { Divider, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Error 404
      </Typography>
      <hr />
      <Divider />
      <Typography variant="h4" component="p" sx={{ textAlign: "center" }}>
        Page not found :(
      </Typography>
    </>
  );
};

export default PageNotFound;
