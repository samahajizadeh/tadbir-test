import React, { useContext, Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//material-ui
import { Grid, Divider, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import StarIcon from "@mui/icons-material/Star";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//project components
import Logo from "../UI/Logo";
import classes from "./MainNavigation.module.css";
import UserContext from "../../store/UserContext";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} enterTouchDelay={0} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

function MainNavigation(props) {
  const theme = useTheme();
  // const classes = useStyles(theme);
  const { userData, setUserProfile, logout } = useContext(UserContext);
  const [showLogout, setshowLogout] = React.useState(false);

  const router = useRouter();
  useEffect(() => {
    setshowLogout(true);
  }, []);

  const logoutHandle = () => {
    setUserProfile(null);
    setshowLogout(true);
  };

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
          {showLogout && !logout ? (
            <Fragment>
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
            </Fragment>
          ) : (
            <HtmlTooltip
              title={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 1,
                    width: 250,
                  }}
                >
                  <Typography sx={{ textAlign: "center" }} variant="caption">
                    <StarIcon fontSize="large" sx={{ color: "#EBE2D8" }} />
                    <div>مجموعه امتیاز دریافت شده</div>
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    // color={"red"}
                    sx={{ mt: 1, mb: 3 }}
                    style={{ direction: "rtl" }}
                  >
                    {`${userData?.score} امتیاز `}
                  </Typography>
                  <Divider />
                  <List
                    sx={{
                      width: "100%",
                      bgcolor: "background.paper",
                      fontSize: "14px",
                    }}
                    style={{ direction: "rtl" }}
                    component="nav"
                    aria-label="mailbox folders"
                  >
                    <ListItem
                      disablePadding
                      sx={{
                        "&:hover": {
                          backgroundColor: "#EBE2D8",
                        },
                      }}
                    >
                      <Link href="/awards" passHref>
                        <ListItemButton>
                          <ListItemIcon sx={{ minWidth: "30px" }}>
                            <DashboardIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary="رفتن به پنل فروشگاه"
                            primaryTypographyProps={{ fontSize: "14px" }}
                          />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem
                      disablePadding
                      sx={{
                        "&:hover": {
                          backgroundColor: "#EBE2D8",
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="ویرایش پروفایل"
                          primaryTypographyProps={{ fontSize: "14px" }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      disablePadding
                      onClick={logoutHandle}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#EBE2D8",
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          <LogoutOutlined />
                        </ListItemIcon>
                        <ListItemText
                          primary="خروج"
                          primaryTypographyProps={{ fontSize: "14px" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              }
            >
              <Button endIcon={<KeyboardArrowDownIcon />}>
                {userData?.fullName}
              </Button>
            </HtmlTooltip>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

export default MainNavigation;
