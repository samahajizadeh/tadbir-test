import React, { Fragment, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

//material ui
import { useTheme } from "@mui/material/styles";
import {
  Container,
  Card,
  Chip,
  Divider,
  Grid,
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
  Box
} from "@mui/material";
import { styled } from "@mui/material/styles";

//project component

const SkeletonPersonal = dynamic(() =>
  import("../../src/components/UI/SkeletonPersonal")
);

const SkeletonContactInfo_Confirm = dynamic(() =>
  import("../../src/components/UI/SkeletonContactInfo_Confirm")
);

const PersonalInfo = dynamic(
  () => import("../../src/components/Register/PersonalInfo"),
  {
    loading: () => <SkeletonPersonal />,
  }
);
const ContactInfo = dynamic(
  () => import("../../src/components/Register/ContactInfo"),
  {
    loading: () => <SkeletonContactInfo_Confirm/>
  }
);
const Confirm = dynamic(() => import("../../src/components/Register/Confirm"), {
  loading: () => <SkeletonContactInfo_Confirm/>
});

import Logo from "../../src/components/UI/Logo";
import { RgisterContextProvider } from "../../src/store/RegisterContext";
import classes from "../../styles/CustomPage.module.css";
import bakgroundPage from "../../src/assets/images/bg1.jpg";

const RootDivider = styled("div")(({ theme }) => ({
  width: "80%",
  alignItems: "center",
  ...theme.typography.body2,
  margin: "10px auto 25px",
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const RootStepper = styled("Stepper")(({ theme }) => ({
  width: "90%",
}));

const steps = ["اطلاعات شخصی", "اطلاعات تماس", "تایید حساب کاربری"];

const register = () => {
  const theme = useTheme();
  const breakpointMd = useMediaQuery(theme.breakpoints.down("md"));

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalInfo
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
          />
        );
      case 1:
        return (
          <ContactInfo
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
          />
        );
      case 2:
        return <Confirm handleBack={handleBack} activeStep={activeStep} />;
    }
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
      <RgisterContextProvider>
        <Container maxWidth="md" dir="rtl" sx={{ zIndex: 2 }}>
          <Card
            sx={{
              my: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 3,
            }}
          >
            <Grid container>
              <Grid item xs={12} sx={{ my: 2 }}>
                <Logo />
              </Grid>

              <Grid item xs={12}>
                <RootDivider>
                  <Divider>
                    <Chip label="ثبت نام " />
                  </Divider>
                </RootDivider>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px dashed #e0e0e0",
                    borderRadius: 2,
                    backgroundColor: "#fbfbfb;",
                  }}
                >
                  <Stepper
                    activeStep={activeStep}
                    sx={{ pt: 3, pb: 5 }}
                    alternativeLabel
                  >
                    {steps.map((label, index) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>

                  <Fragment>
                    <form noValidate>{getStepContent(activeStep)}</form>
                  </Fragment>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </RgisterContextProvider>
    </div>
  );
};

export default register;
