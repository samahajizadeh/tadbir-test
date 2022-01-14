import React, { useState, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Image from "next/image";
import { setCookies } from "cookies-next";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Link,
  Button,
  Container,
  Grid,
  FormControl,
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Divider,
  useMediaQuery,
  Box,
  Chip,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// project components
import Logo from "../../src/components/UI/Logo";
import Messages from "../../src/components/UI/Messages";

import SetErrorSnackbar from "../../src/components/UI/SetErrorSnackbar";
import classes from "../../styles/CustomPage.module.css";

import bakgroundPage from "../../src/assets/images/bg1.jpg";
import useHttp from "../../src/hook/useHttp";

//styled material
const RootDivider = styled("div")(({ theme }) => ({
  width: "80%",
  alignItems: "center",
  ...theme.typography.body2,
  margin: "10px auto 25px",
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

// form validation rules
const validationSchema = Yup.object().shape({
  email_mobile: Yup.string().required(Messages.requiredMsg),

  password: Yup.string().required(Messages.requiredMsg),
});

const login = () => {
  const theme = useTheme();
  const breakpointMd = useMediaQuery(theme.breakpoints.down("md"));

  const [snackBar, setSnakbar] = useState({
    message: "",
    setOpen: false,
    severity: "success",
  });

  const { isError, isLoading, sendRequest } = useHttp();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // get functions to build form with useForm() hook

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, control, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // let myDate

  const onSubmitLogin = async (data) => {
    const fetchData = (data) => {
      const token_value = data.data.token_detail;
      if (data.meta.code === 200 || data.status === "Success") {
        setCookies("token_arman", token_value.token);
        setCookies("refresh_tokent_arman", token_value.refresh_token);
        router.push("/awards");
      }
    };

    sendRequest(
      {
        url: "v1/user/login",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      },
      fetchData
    );
  };

  useEffect(() => {
    if (isError) {
      setSnakbar({
        severity: "error",
        setOpen: true,
        message: isError,
      });
    }
  }, [isError]);

  const closeSnakHandler = () => {
    setSnakbar({ message: "", setOpen: false, severity: "success" });
  };
  return (
    <div className={classes["bg-page"]}>
      <Image
        src={bakgroundPage}
        layout="fill"
        objectFit="cover"
        priority="true"
        className={classes.imageCustom}
      />
      {snackBar.message && (
        <SetErrorSnackbar
          severity={snackBar.severity}
          setOpen={snackBar.setOpen}
          message={snackBar.message}
          onClose={closeSnakHandler}
        />
      )}
      <Container maxWidth="xs" dir="rtl" sx={{ zIndex: 2 }}>
        <Box
          sx={{
            my: 7,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmitLogin)}
              noValidate
              sx={{
                mt: 1,
                p: 3,
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: 30 }}>
                <Logo />
              </div>

              <Grid item xs={12}>
                <RootDivider>
                  <Divider>
                    <Chip label="ورود کاربران" />
                  </Divider>
                </RootDivider>
              </Grid>

              <FormControl
                fullWidth
                sx={{ mb: 1 }}
                size="small"
                error={errors.email_mobile ? true : false}
              >
                <InputLabel htmlFor="email-login">ایمیل/کدملی</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="text"
                  name="email_mobile"
                  {...register("email_mobile")}
                  label="ایمیل/کدملی"
                />

                {errors.email_mobile && (
                  <FormHelperText error id="helper-text--email">
                    {errors.email_mobile?.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                error={errors.password ? true : false}
              >
                <InputLabel htmlFor="password-login">رمز عبور</InputLabel>
                <OutlinedInput
                  id="password-login"
                  type={showPassword ? "text" : "password"}
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
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="رمز عبور"
                  inputProps={{}}
                />
                {errors.password && (
                  <FormHelperText error id="helper-text--password">
                    {errors.password?.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? (
                  <CircularProgress color="secondary" size="20px" />
                ) : (
                  "ورود"
                )}
              </Button>

              <Typography
                component={Link}
                alignItems="center"
                href="/"
                variant="subtitle1"
                fontSize="14px"
                sx={{ textDecoration: "none", my: 0.75 }}
              >
                رمز عبورتان را فراموش کرده‌اید؟
              </Typography>

              <Grid item xs={12}>
                <Divider sx={{ my: 1 }} />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  alignItems="center"
                  variant="subtitle1"
                  fontSize="14px"
                  sx={{ textDecoration: "none", my: 0.75 }}
                >
                  هنوز ثبت نام نکرده اید؟
                  <Link href="/register" sx={{ ml: "4px" }}>
                    رفتن به ثبت نام
                  </Link>
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default login;
