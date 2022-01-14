import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
  CircularProgress
} from "@mui/material";
import { SendToMobileOutlined } from "@mui/icons-material";

//project component
import RegisterContext from "../../store/RegisterContext";
import useHttp from "../../hook/useHttp";
import SetErrorSnackbar from "../UI/SetErrorSnackbar";
import Messages from "../UI/Messages";

// form validation rules
const phoneRegExp = /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/;
const validationSchema = Yup.object().shape({
  mobile: Yup.string()
    .required(Messages.requiredMsg)
    .matches(phoneRegExp, Messages.validTel),
});

function ContactInfo({ activeStep, handleBack, handleNext }) {
  const { isLoading, sendRequest, isError } = useHttp();

  const [snackBar, SetSnakbar] = useState({
    message: "",
    setOpen: false,
    severity: "success",
  });

  const { addUser, userInfo } = useContext(RegisterContext);
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, control, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmitContact = (data) => {
    if (!Object.keys(errors).length) {
      addUser({ ...userInfo, ...data, flag: "IR" });

      const fetchData = (data) => {
        if (data.meta.code === 200 && data.status === "Success") {
          SetSnakbar({
            severity: "success",
            setOpen: true,
            message: Messages.confirmedCode,
          });
        } else {
          SetSnakbar({
            severity: "error",
            setOpen: true,
            message: Messages.errorMsg,
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
          body: { ...data, flag: "IR" },
        },
        fetchData
      );
    }
  };
  const closeSnakHandler = () => {
    SetSnakbar({ message: "", setOpen: false, severity: "success" });
    handleNext();
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
      <Typography variant="caption" display="block" gutterBottom>
        لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد
        شد.
      </Typography>
      <Grid
        container
        sx={{ mb: 1 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <FormControl
            fullWidth
            sx={{ my: 1 }}
            required
            size="small"
            error={errors.mobile ? true : false}
          >
            <InputLabel htmlFor="mobile-register">شماره موبایل</InputLabel>
            <OutlinedInput
              id="mobile-register"
              type="string"
              sx={{ textAlign: "left" }}
              label="شماره موبایل"
              name="mobile"
              defaultValue={userInfo?.mobile}
              {...register("mobile")}
              endAdornment={<SendToMobileOutlined color="disabled" />}
              inputProps={{}}
            />

            {errors.mobile && (
              <FormHelperText error id="helper-text--mobile">
                {errors.mobile?.message}
              </FormHelperText>
            )}
          </FormControl>
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
          onClick={handleSubmit(onSubmitContact)}
          sx={{ mt: 3, ml: 1 }}
          disabled={isLoading && snackBar.setOpen ? true : false}
        >
           {isLoading ? <CircularProgress color="secondary" size='20px' /> : "مرحله بعد"}
        </Button>
      </Box>
    </Fragment>
  );
}

ContactInfo.propTypes = {
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  activeStep: PropTypes.number,
};
export default ContactInfo;
