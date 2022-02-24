import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Userlocation, ContactInfoInputs } from './components';
import { PreferredContactsList } from './components/preferredContactsList';
import styles from './contactInfo.module.scss';
import { UserProfile } from '../../../../components';

const {
    'contact-info': cls_contactInfo,
    'introduce-yourself': cls_introduceYourself,
    'you': cls_you,
    'preferredContact': cls_preferredContact,
    'preferredContact_wrapper': cls_preferredContactWrapper
} = styles;

export const ContactInfo: FC = () => {
    return (<>
        <h1 className={cls_you} >
            <FormattedMessage id='you-are' /> ?
        </h1>
        <p className={cls_contactInfo} >
            <FormattedMessage id='contact-info' />
        </p>
        <p className={cls_introduceYourself} >
            <FormattedMessage id='introduce-yourself' />
        </p>
        <ContactInfoInputs />
        <p className={cls_preferredContact} >
            <FormattedMessage id='answer-preference' />
        </p>
        <div className={cls_preferredContactWrapper} >
            <PreferredContactsList />
        </div>
        <p className={cls_contactInfo} >
            <FormattedMessage id='your-address' />
        </p>
        <Userlocation />
        <UserProfile />
    </>);
};
