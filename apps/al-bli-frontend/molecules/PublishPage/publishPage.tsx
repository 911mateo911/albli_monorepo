import { FC } from 'react';
import styles from './publishPage.module.scss';
// What is this shit
import { PublishPageContainer } from '@al-bli/albli-ui';

export const PublishPage: FC = () => {
    return (
        <div className={styles['root-container']} >
            <PublishPageContainer />
        </div>
    )
}
