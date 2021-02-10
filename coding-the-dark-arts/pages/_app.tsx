import { Provider } from 'react-redux';
import Layout from '../components/layout';
import '../styles/index.scss';
import configureStore from '../redux/store';
import Router from 'next/router';

// TODO: Swap with our own
import NProgress from 'nprogress';
import '../styles/nprogress.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

interface IApp {
  Component: React.ElementType;
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
