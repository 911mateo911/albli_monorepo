import { Langs } from '@al-bli/al-bli-langs';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { NavbarComponent } from '../molecules/Navbar';
import { useTheme } from '@al-bli/albli-ui';
import './styles.scss';
import { useEffect } from 'react';
import styles from '../styles/index.module.scss';

function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
    const { locale } = useRouter();
    const { initTheme, toggle } = useTheme();

    useEffect(() => {
        initTheme();
    }, [initTheme])

    return (
        <IntlProvider locale={locale} messages={Langs[locale]} onError={() => ({})} >
            <div className={styles.body} >
                <button onClick={toggle} >Toggle dark mode</button>
                <NavbarComponent />
                <div className='page-padder' ></div>
                <Component {...pageProps} />
            </div>
        </IntlProvider>
    );
}

export default CustomApp;
