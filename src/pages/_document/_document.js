import React from 'react';
import Document, { Html, Main } from 'next/document';

import Head from './headCustom';

import NextScript from './nextScriptCustom';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
