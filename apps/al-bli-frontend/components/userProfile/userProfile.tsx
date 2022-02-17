import classNames from 'classnames';
import { FC } from 'react';
import { UserProfileProps } from './userProfile.interface';
import styles from './userProfile.module.scss';

const myProfile = 'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1642375512/me_az7yma.jpg';

export const UserProfile: FC<UserProfileProps> = ({
    imageClassName,
    wrapperClassName,
    textClassName
}) => {
    return (
        <div className={classNames(wrapperClassName, styles.wrapper)} >
            <img
                src={myProfile}
                alt='mateo malaj'
                className={classNames(imageClassName, styles['user-img'])}
            />
            <p className={classNames(textClassName, styles['user-name'])} >Mateo Malaj</p>
        </div>
    )
}
