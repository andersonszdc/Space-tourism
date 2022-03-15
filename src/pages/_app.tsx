import { NextPage } from "next";
import { AppProps } from "next/app";
import React, { ComponentType } from "react";
import GlobalStyle from "../styles/global";

type Page = NextPage & {
  layout?: ComponentType;
};

type MyAppProps = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment;
  return (
    <>
      <GlobalStyle />
      <CustomLayout>
        <Component oi="oirs" {...pageProps} />
      </CustomLayout>
    </>
  );
}

export default MyApp;
