import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//material-ui
import {
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@emotion/react";

//project components
import Logo from "../UI/Logo";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  const theme = useTheme();
  // const classes = useStyles(theme);
  const router = useRouter();
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      flexWrap="nowrap"
      alignItems="center"
      p={2}
      bgcolor="white"
    >
      <Grid
        item
        xs={12}
        lg={11}
        xl={10}
        style={{
          justifyContent: "space-between",
          flexFlow: "nowrap",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div className={classes.rightSide}>
          <Logo width="171" height="40" />
        </div>
        <div className={classes.leftSide}>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Link href="/register" passHref>
            <Button variant="contained" sx={{ mx: 1 }}>
              شروع کنید
            </Button>
          </Link>
          <Link href={"/login"} passHref>
            <Button color="primary" component="a" sx={{ mx: 1 }}>
              ورود
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}

export default MainNavigation;
