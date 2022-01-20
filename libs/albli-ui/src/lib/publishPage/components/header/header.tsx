import { FC } from 'react';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import { ReactComponent as BackIcon } from '../../../icons/arrow-back-outline.svg';

export const Header: FC = () => {
    const { back: goBack } = useRouter();

    return (
        <div className={styles['root-container']} >
            <button
                onClick={goBack}
                className={styles['back-button']}
            >
                <BackIcon />
                Mbrapa
            </button>
        </div>
    )
}
