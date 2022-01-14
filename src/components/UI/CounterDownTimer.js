import React, { useEffect, useState, useContext, Fragment } from "react";

//material-ui
import { Box, Button, Typography, CircularProgress } from "@mui/material";

//project components
import RegisterContext from "../../store/RegisterContext";
import useHttp from "../../hook/useHttp";
import SetErrorSnackbar from "./SetErrorSnackbar";
import Messages from "./Messages";

function CounterDownTimer() {
  const { isLoading, sendRequest, isError } = useHttp();
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);

  const [snackBar, SetSnakbar] = useState({
    message: "",
    setOpen: false,
    severity: "success",
  });
  const { userInfo } = useContext(RegisterContext);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 0.85
      );
    }, 1000);
    return () => {
      clearInterval(myInterval);
      clearInterval(timer);
    };
  });

  const closeSnakHandler = () => {
    SetSnakbar({ message: "", setOpen: false, severity: "success" });
  };

  const resetCounterDown = () => {
    setMinutes(2);
    setSeconds(0);
    setProgress(0);
    const fetchData = (data) => {
      if (data.meta.code === 200 && data.status === "Success") {
        SetSnakbar((prevState) => {
          return {
            ...prevState,
            setOpen: true,
            message: Messages.confirmedCode,
          };
        });
      } else {
        SetSnakbar({
          severity: "error",
          setOpen: true,
          message: Messages.requestMsg,
        });
      }
    };

    sendRequest(
      {
        url: "v1/user/send/code",
        method: "POST",
        headers: {
          "Content-Type": "applicaton/json",
        },
        body: { mobile: userInfo.mobile, flag: userInfo.flag },
      },
      fetchData
    );
  };

  return (
    <Fragment>
      {snackBar.message && (
        <SetErrorSnackbar
          severity={snackBar.severity}
          setOpen={snackBar.setOpen}
          message={snackBar.message}
          onClose={closeSnakHandler}
        />
      )}
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        {minutes === 0 && seconds === 0 ? null : (
          <CircularProgress variant="determinate" value={progress} />
        )}

        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {minutes === 0 && seconds === 0 ? null : (
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Typography>
          )}
        </Box>
        {minutes === 0 && seconds === 0 && (
          <Button
            variant="contained"
            color="info"
            sx={{ width: "150px", my: 2 }}
            onClick={resetCounterDown}
          >
            درخواست مجدد
          </Button>
        )}
      </Box>
    </Fragment>
  );
}

export default CounterDownTimer;
