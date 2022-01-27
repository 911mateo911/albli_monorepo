import { Langs } from '@al-bli/al-bli-langs';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { NavbarComponent } from '../molecules/Navbar';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={Langs[locale]} onError={() => ({})} >
      <NavbarComponent />
      <div className='page-padder' ></div>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default CustomApp;
