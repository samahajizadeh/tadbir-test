import "../styles/globals.css";

import * as React from "react";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../src/theme";
import RtlTheme from "../src/RtlTheme";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

import LoadingScreen from "../src/components/UI/LoadingScreen";


import { useRouter } from "next/router";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setIsLoading(true) : setIsLoading(false);
    };
    const handleComplete = (url) => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <title>کارگزاری آرمان تدبیر نقش جهان</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RtlTheme>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {!isLoading ? <Component {...pageProps} /> : <LoadingScreen />}
        </ThemeProvider>
      </RtlTheme>
    </StyledEngineProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
