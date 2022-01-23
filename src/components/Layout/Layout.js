import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";

//material-ui
import { Container } from "@mui/material";

// project components
const MainNavigation = dynamic(() => import("./MainNavigation"), { ssr: false });
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
