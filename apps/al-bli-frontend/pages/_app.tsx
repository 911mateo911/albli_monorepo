import { Langs } from '@al-bli/al-bli-langs';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { NavbarComponent } from '../molecules/Navbar';
import './styles.scss';
import { useEffect } from 'react';

function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
    const { locale } = useRouter();

    // add the default theme here
    // TODO: make a hook to get from localstorage
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const body = document.querySelector('body');

        body.classList.add('theme--white');
    }, []);

    return (
        <IntlProvider locale={locale} messages={Langs[locale]} onError={() => ({})} >
            <NavbarComponent />
            <div className='page-padder' ></div>
            <Component {...pageProps} />
        </IntlProvider>
    );
}

export default CustomApp;
