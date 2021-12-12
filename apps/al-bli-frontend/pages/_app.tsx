import { AppProps } from 'next/app';
import { NavbarComponent } from '../molecules/Navbar';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NavbarComponent />
      <div className='page-padder' ></div>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
