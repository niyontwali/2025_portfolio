import Preloader from '@/src/components/Preloader';
import MyHead from '@/src/MyHead';
import '@/styles/globals.css';
import { Fragment } from 'react';

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <MyHead />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
