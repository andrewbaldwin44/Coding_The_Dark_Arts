import PropTypes from "prop-types";
import Layout from "../components/layout";
// import { gql } from "@apollo/client";
import index from '../styles/index.scss'
import AppProvider from '../components/appContext';

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AppProvider>
      <Component {...pageProps} />
      </AppProvider>
    </Layout>
  );
}

export default MyApp;
