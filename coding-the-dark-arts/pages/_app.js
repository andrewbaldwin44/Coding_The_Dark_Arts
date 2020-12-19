import PropTypes from "prop-types";
import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../components/layout";
// import { gql } from "@apollo/client";

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
