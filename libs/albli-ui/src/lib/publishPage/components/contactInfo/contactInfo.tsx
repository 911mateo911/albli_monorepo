import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { ContactInfoInputs } from './components';
import styles from './contactInfo.module.scss';

export const ContactInfo: FC = () => {
    return (<>
        <h1 className={styles.you} >
            <FormattedMessage id='you-are' /> ?
        </h1>
        <p className={styles['contact-info']} >
            <FormattedMessage id='contact-info' />
        </p>
        <p className={styles['introduce-yourself']} >
            <FormattedMessage id='introduce-yourself' />
        </p>
        <ContactInfoInputs />
    </>);
};
