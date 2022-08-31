import Head from "next/head";

import { wrapper } from "../store/index";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Binar Academy | Frontend Mockup Test</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default wrapper.withRedux(MyApp);
