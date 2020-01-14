import React from 'react'
import App from 'next/app';
import getConfig from 'next/config';
import MainLayout from "../components/layouts/mainLayout";

import {initGA, logPageView} from '../utils/analytics';

const { publicRuntimeConfig } = getConfig();

class MyApp extends App {

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  static async getInitialProps(appContext) {

    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    let baseUrl = publicRuntimeConfig.base_url;

    return { ...appProps, baseUrl}
  }

  render() {
    const { baseUrl } = this.props;

    return (
          <MainLayout
           baseUrl = {baseUrl}>
          </MainLayout>
    )
  }
}

export default MyApp