import { AppProps } from 'next/app';
import { NavbarComponent } from '../molecules/Navbar';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NavbarComponent />
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
