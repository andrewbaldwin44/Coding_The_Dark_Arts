import PropTypes from "prop-types";
import Layout from "../components/layout";
// import { gql } from "@apollo/client";
import index from "../styles/index.scss";
import configureStore from "../store";
import { Provider } from 'react-redux';

MyApp.propTypes = {
  Component: PropTypes.object,
  pageProps: PropTypes.object,
};

const store = configureStore();

function MyApp({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);

  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
