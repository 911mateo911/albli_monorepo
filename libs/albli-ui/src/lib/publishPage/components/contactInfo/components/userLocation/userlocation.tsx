import { FC } from 'react';
import styles from './userlocation.module.scss';
import { ReactComponent as LocationIcon } from '../../../../../icons/location-outline.svg';
import { UserLocationProps } from './userlocation.interface';

export const Userlocation: FC<UserLocationProps> = ({
    streetAddress,
    countryAddress
}) => {
    return (
        <div className={styles.wrapper} >
            <LocationIcon className={styles['location-icon']} />
            <span className={styles['address-wrapper']} >
                <p className={styles['street-address']} >{streetAddress}</p>
                <p className={styles['country-address']} >{countryAddress}</p>
            </span>
        </div>
    )
}
