import React from "react";
import PropTypes from "prop-types";

//material-ui
import { Container } from "@mui/material";

// project components
import MainNavigation from "./MainNavigation";

function Layout({ children }) {
  return (
    <div dir="rtl">
      <MainNavigation />
      <Container maxwidth="lg">
        <main>{children}</main>
      </Container>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Layout;
