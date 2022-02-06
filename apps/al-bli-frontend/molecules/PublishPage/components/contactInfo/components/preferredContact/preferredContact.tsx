import classNames from 'classnames';
import styles from './preferredContact.module.scss';
import { PreferredContactProps } from './preferredContact.interface';

export const PreferredContact = <T,>({
    onClick,
    isActive,
    contact
}: PreferredContactProps<T>): JSX.Element => {
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
