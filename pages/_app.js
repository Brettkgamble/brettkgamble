import React from 'react'
import App from 'next/app';
import getConfig from 'next/config';
import MainLayout from "../components/layouts/mainLayout";

const { publicRuntimeConfig } = getConfig();

class MyApp extends App {

  static async getInitialProps(appContext) {

    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    let baseUrl = publicRuntimeConig.base_url;

    return { ...appProps}
  }

  render() {
    return (
          <MainLayout
            baseUrl={baseUrl}>
          </MainLayout>
    )
  }
}

export default MyApp