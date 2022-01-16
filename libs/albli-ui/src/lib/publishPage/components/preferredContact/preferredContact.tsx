import classNames from 'classnames';
import { FC } from 'react';
import styles from './preferredContact.module.scss';
import { PreferredContactProps } from './preferredContact.interface';

export const PreferredContact: FC<PreferredContactProps> = ({
    onClick,
    isActive,
    contact
}) => {
    return (
        <span
            onClick={() => onClick(contact)}
            className={classNames(
                styles.preferredContact,
                {
                    [styles.preferredContact_active]: isActive
                }
            )} >
            {contact}
        </span>
    )
}
