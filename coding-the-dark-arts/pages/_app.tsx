import { Provider } from 'react-redux';
import Layout from '../components/layout';
import '../styles/index.scss';
import configureStore from '../redux/store';

interface IApp {
  Component: React.ReactElement;
  pageProps: object;
}

const store = configureStore();

function App({ Component, pageProps }: IApp) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
