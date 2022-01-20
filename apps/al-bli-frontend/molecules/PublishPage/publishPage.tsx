import { FC } from 'react';
import styles from './publishPage.module.scss';
import { Container } from '@al-bli/albli-ui';

export const PublishPage: FC = () => {
    return (
        <div className={styles['root-container']} >
            <Container />
        </div>
    )
}
