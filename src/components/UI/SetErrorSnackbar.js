import React from "react";
import PropTypes from "prop-types";

//material-ui
import { Snackbar, Alert } from "@mui/material";

function SetErrorSnackbar({ setOpen, severity, message, onClose }) {
  return (
    <Snackbar
      open={setOpen}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >

      <Alert severity={severity } sx={{ width: "100%" }} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
}
SetErrorSnackbar.propTypes ={
  setOpen:PropTypes.bool,
  severity:PropTypes.string,
  onClose:PropTypes.func
}
export default SetErrorSnackbar;

