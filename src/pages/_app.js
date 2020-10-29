import React from 'react';

import { Provider } from 'react-redux';
import Head from 'next/head';
import App from 'next/app';

import withReduxStore from '../utils/with-redux-store';

import '@typefaces-pack/typeface-inter';
//import 'semantic-ui-css/semantic.min.css';
import '../assets/styles/bootstrap.min.css';
import '../assets/styles/fontawesome.min.css';
import '../assets/styles/animate.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../assets/styles/style.css';
import '../assets/styles/responsive.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>React Next Boilerplate</title>
        </Head>

        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </React.StrictMode>
    );
  }
}

export default withReduxStore(Srr);
