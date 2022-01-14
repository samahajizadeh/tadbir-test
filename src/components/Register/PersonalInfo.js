import React, { Fragment, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PropTypes from "prop-types";

//material ui
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  useMediaQuery,
  FormControl,
  OutlinedInput,
  TextField,
  InputLabel,
  FormHelperText,
  InputAdornment,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

//project component
import Messages from "../UI/Messages";
import RegisterContext from "../../store/RegisterContext";


// form validation rules
const validationSchema = Yup.object().shape({
  name: Yup.string().required(Messages.requiredMsg),
  family: Yup.string().required(Messages.requiredMsg),
  national_code: Yup.string()
    .required(Messages.requiredMsg)
    .matches(/^[0-9]{10}$/g,Messages.validNationalCode),

  email: Yup.string().required(Messages.requiredMsg).email(Messages.validEmail),

  password: Yup.string()
    .required(Messages.requiredMsg)
    .min(8, Messages.validPass),

  confirmed: Yup.string()
    .required(Messages.requiredMsg)
    .oneOf([Yup.ref("password"), null], Messages.validConfimPass),
});

function PersonalInfo({ activeStep, handleBack, handleNext }) {
  const { addUser, userInfo } = useContext(RegisterContext);
  const theme = useTheme();
  const breakpointMd = useMediaQuery(theme.breakpoints.down("md"));

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const handleClickShowPassword = () => {
    setShowPassword((prevStat) => {
      return { ...prevStat, password: !showPassword.password };
    });
  };
  const handleClickShowPasswordConfirmed = () => {
    setShowPassword((prevStat) => {
      return { ...prevStat, confirmPassword: !showPassword.confirmPassword };
    });
  };

  // get functions to build form with useForm() hook
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, control, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    if (!Object.keys(errors).length) {
      addUser({ ...data});
      handleNext();
    }
  };

  return (
    <Fragment>
      <Grid container spacing={breakpointMd ? 0 : 2} sx={{ mb: 1 }}>
        <Grid item xs={12} sm={6} sx={{px:2}}>
          <TextField
            fullWidth
            label="نام"
            margin="normal"
            name="nama"
            type="text"
            defaultValue={userInfo?.name}
            size="small"
            sx={{ my: 1 }}
            required
            error={errors.name ? true : false}
            helperText={errors.name?.message}
            {...register("name")}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{px:2}}>
          <TextField
            fullWidth
            label="نام خانوادگی"
            margin="normal"
            name="family"
            {...register("family")}
            type="text"
            defaultValue={userInfo?.family}
            size="small"
            sx={{ my: 1 }}
            required
            error={errors.family ? true : false}
            helperText={errors.family?.message}
          />
        </Grid>
      </Grid>
      <Grid container spacing={breakpointMd ? 0 : 2} sx={{ mb: 1 }}>
        <Grid item xs={12} sm={12} sx={{px:2}}>
          <FormControl
            fullWidth
            size="small"
            sx={{ my: 1 }}
            required
            error={errors.national_code ? true : false}
          >
            <InputLabel htmlFor="nationalCode-register">کدملی</InputLabel>
            <OutlinedInput
              id="nationalCode-register"
              name="national_code"
              type="text"
              inputProps={{}}
              defaultValue={userInfo?.national_code}
              label="کدملی"
              {...register("national_code")}
            />
            {errors.national_code && (
              <FormHelperText error id="helper-text--national_code">
                {errors.national_code?.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={breakpointMd ? 0 : 2} sx={{ mb: 1 }}>
        <Grid item xs={12} sm={12} sx={{px:2}}>
          <FormControl
            fullWidth
            size="small"
            sx={{ my: 1 }}
            required
            error={errors.email ? true : false}
          >
            <InputLabel htmlFor="email-register">ایمیل</InputLabel>
            <OutlinedInput
              id="email-register"
              type="email"
              name="email"
              defaultValue={userInfo?.email}
              inputProps={{}}
              label="ایمیل"
              {...register("email")}
            />

            {errors.email && (
              <FormHelperText error id="helper-text--email">
                {errors.email?.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={breakpointMd ? 0 : 2} sx={{ mb: 1 }}>
        <Grid item xs={12} sm={6} sx={{px:2}}>
          <FormControl
            fullWidth
            sx={{ my: 1 }}
            required
            // sx={{ ...theme.typography.customInput }}
            size="small"
            error={errors.password ? true : false}
          >
            <InputLabel htmlFor="password-register">رمزعبور</InputLabel>
            <OutlinedInput
              id="password-register"
              type={showPassword.password ? "text" : "password"}
              defaultValue={userInfo?.password}
              label="رمزعبور"
              name="password"
              {...register("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    size="large"
                  >
                    {showPassword.password ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              inputProps={{}}
            />

            {errors.password && (
              <FormHelperText error id="helper-text--password">
                {errors.password?.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} sx={{px:2}}>
          <FormControl
            fullWidth
            sx={{ my: 1 }}
            required
            size="small"
            error={errors.confirmed ? true : false}
          >
            <InputLabel htmlFor="confirmPassword-register">
              تکرار رمزعبور
            </InputLabel>
            <OutlinedInput
              id="confirmPassword-register"
              type={showPassword.confirmPassword ? "text" : "password"}
              label="تکرار رمزعبور"
              name="confirmed"
              defaultValue={userInfo?.confirmed}
              {...register("confirmed")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordConfirmed}
                    edge="end"
                    size="large"
                  >
                    {showPassword.confirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              inputProps={{}}
            />

            {errors.confirmed && (
              <FormHelperText error id="helper-text--confirmed">
                {errors.confirmed?.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={breakpointMd ? 0 : 2} sx={{ mb: 1 }}>
        <Grid item xs={12} sm={6} sx={{px:2}}>
          <TextField
            fullWidth
            label="کدمعرف"
            margin="normal"
            name="reagent_code"
            type="text"
            size="small"
            defaultValue={userInfo?.reagent_code}
            sx={{ my: 1 }}
            {...register("reagent_code")}
            // sx={{ ...theme.typography.customInput }}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{px:2}}>
          <TextField
            fullWidth
            label="کدشعبه"
            margin="normal"
            name="branch"
            type="text"
            defaultValue={userInfo?.branch}
            size="small"
            sx={{ my: 1 }}
            {...register("branch")}
          />
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
          onClick={handleSubmit(onSubmit)}
          sx={{ mt: 3, ml: 1 }}
        >
          مرحله بعد
        </Button>
      </Box>
    </Fragment>
  );
}

PersonalInfo.propTypes = {
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  activeStep: PropTypes.number,
};

export default PersonalInfo;
