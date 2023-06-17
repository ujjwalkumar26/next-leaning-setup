import "../styles/globals.css";
import React, { useState } from "react";
import App, { AppContext, AppInitialProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

interface IAppProps extends AppInitialProps {
  Component: any;
  pageProps: any;
}

const queryClient = new QueryClient();

const MyApp: React.FC<IAppProps> = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Hydrate state={pageProps.state}>
          <Component {...pageProps} queryClient={queryClient} />
        </Hydrate>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

// @ts-ignore
MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;
