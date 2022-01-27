import { FC } from 'react';
import styles from './userProfile.module.scss';

const myProfile = 'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1642375512/me_az7yma.jpg';

export const UserProfile: FC = () => {
    return (
        <div className={styles.wrapper} >
            <img
                src={myProfile}
                alt='mateo malaj'
                className={styles['user-img']}
            />
            <p className={styles['user-name']} >Mateo Malaj</p>
        </div>
    )
}
