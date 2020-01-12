import React, { Fragment } from 'react'
import App, { Container as NextContainer } from 'next/app';

//import auth0Serv from '../lib/appAuth';
import MainLayout from "../components/layouts/mainLayout";
import classes from '../App.css';


class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //


  static async getInitialProps(appContext) {


    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps}

  }

  render() {

    const { Component, pageProps, muiTheme } = this.props;

    const headerStyle = pageProps.headerStyle ? pageProps.headerStyle : '';
    const pageConfigs = pageProps.pageConfigs ? pageProps.pageConfigs : null;

    return (
          <MainLayout>
          </MainLayout>
    )

  }
}

export default MyApp