import { FC } from 'react';
import styles from './userlocation.module.scss';
import { ReactComponent as LocationIcon } from '@al-bli/icons/location-outline.svg';
import { DropdownInput } from '@al-bli/albli-ui';

export const Userlocation: FC = () => {
    return (
        <div className={styles.wrapper} >
            <LocationIcon className={styles['location-icon']} />
            <DropdownInput
                values={['Tirane', 'Ballsh']}
                className={styles.dropdown}
                selectedValue='Ballsh'
                onChange={() => ({})}
            />
        </div>
    )
}
