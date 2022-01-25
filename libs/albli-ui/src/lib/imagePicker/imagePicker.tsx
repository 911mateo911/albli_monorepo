import { FC } from 'react';
import styles from './imagePicker.module.scss';
import { ReactComponent as CameraIcon } from '../icons/camera.svg';

export const ImagePicker: FC = () => {
    return (
        <div className={styles['picker-container']}>
            <label className={styles['picker-label']} htmlFor='image-picker' ></label>
            <CameraIcon className={styles['camera-icon']} />
            <input
                className={styles['image-picker']}
                multiple
                type='file'
                aria-label='image-picker'
                id='image-picker'
                name='image-picker'
            />
            <p className={styles['picker-text']} >Ngarko fotografi</p>
        </div>
    );
};
