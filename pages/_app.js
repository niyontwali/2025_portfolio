import Preloader from '@/src/components/Preloader';
import MyHead from '@/src/MyHead';
import { Fragment } from 'react';

import '@/styles/globals.css';
import '../public/css/skins/yellow.css';

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
