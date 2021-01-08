import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Layout from '../components/layout';
// import { gql } from "@apollo/client";
import index from '../styles/index.scss';
import configureStore from '../store';

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

const store = configureStore();

function MyApp({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
