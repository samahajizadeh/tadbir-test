import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#005C5C",
    },
    secondary: {
      main: "#6D6E71",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["IranYekan", "sans-serif"].join(","),
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      "& > label": {
        top: 17,
        left: 0,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      "& > div > input": {
        padding: "30.5px 14px 11.5px !important",
      },
      "& legend": {
        display: "none",
      },
      "& fieldset": {
        top: 0,
      },
    },
  },
});

export default theme;
