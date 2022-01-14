import React, { Fragment, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
//material-ui
import {
  Grid,
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Typography,
  CircularProgress,
} from "@mui/material";
import { SystemSecurityUpdateGoodOutlined } from "@mui/icons-material";

//project component
import CounterDownTimer from "../UI/CounterDownTimer";
import useHttp from "../../hook/useHttp";
import RegisterContext from "../../store/RegisterContext";
import SetErrorSnackbar from "../UI/SetErrorSnackbar";
import Messages from "../UI/Messages";

// form validation rules
const validationSchema = Yup.object().shape({
  code: Yup.string()
    .required(Messages.requiredMsg)
    .test("len", Messages.validCodeMsg, (val) => val.length === 6),
});

function Confirm({ activeStep, handleBack }) {
  const router = useRouter();

  const { isLoading, sendRequest } = useHttp();
  const { addUser, userInfo } = useContext(RegisterContext);
  const [snackBar, SetSnakbar] = useState({
    message: '',
    setOpen: false,
    severity: 'success',
  });

  // get functions to build form with useForm() hook
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmitConfirm = (data) => {
    if (!Object.keys(errors).length) {
      addUser({ ...userInfo });
      const fetchData = (data) => {
        if (data.meta.code === 200 && data.status === "Success") {
          SetSnakbar((prevState) => {
            return {
              ...prevState,
              setOpen: true,
              message: Messages.successMsg,
            };
          });
          router.push("/");
        } else {
          if (data.data) {
            Object.keys(data.data).map((x) => {
              SetSnakbar({
                severity: "error",
                setOpen: true,
                message: data.data[x],
              });
            });
          } else {
            SetSnakbar({
              severity: "error",
              setOpen: true,
              message: Messages.errorMsg,
            });
          }
        }
      };
      sendRequest(
        {
          url: "v1/user/register",
          method: "POST",
          headers: {
            "Content-Type": "applicaton/json",
          },
          body: { ...data, ...userInfo },
        },
        fetchData
      );
    }
  };

  const closeSnakHandler = () => {
    SetSnakbar({ message: '', setOpen: false, severity:'success' });
  };
  return (
    <Fragment>
      {snackBar.message && <SetErrorSnackbar
        severity={snackBar.severity}
        setOpen={snackBar.setOpen}
        message={snackBar.message}
        onClose={closeSnakHandler}
      />}
      <Grid
        container
        sx={{ mb: 1 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12}>
          <Typography variant="caption" display="block" gutterBottom>
            کد تایید به شماره <Box component="div" display="inline" sx={{ color: 'success.main',fonSize:'16px' }}>{userInfo.mobile}</Box>پیامک شد.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12}>
          <CounterDownTimer />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            fullWidth
            sx={{ my: 1 }}
            required
            size="small"
            error={errors.code ? true : false}
          >
            <InputLabel htmlFor="code-register">کد تایید</InputLabel>
            <OutlinedInput
              id="code-register"
              type="string"
              sx={{ textAlign: "left" }}
              label="کد تایید"
              name="code"
              {...register("code")}
              endAdornment={
                <SystemSecurityUpdateGoodOutlined color="disabled" />
              }
              inputProps={{}}
            />

            {errors.code && (
              <FormHelperText error id="helper-text--code">
                {errors.code?.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "150px", my: 1 }}
            onClick={handleBack}
          >
            تغییر شماره
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            مرحله قبل
          </Button>
        )}

        <Button
          variant="contained"
          onClick={handleSubmit(onSubmitConfirm)}
          sx={{ mt: 3, ml: 1 }}
        >
          {isLoading ? <CircularProgress color="secondary" size='20px' /> : "ثبت کاربر"}
          
        </Button>
      </Box>
    </Fragment>
  );
}
Confirm.propTypes = {
  handleBack: PropTypes.func,
  activeStep: PropTypes.number,
};

export default Confirm;
