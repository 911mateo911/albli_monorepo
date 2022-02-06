import { FC } from 'react';
import styles from './imagePicker.module.scss';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as CameraIcon } from '@al-bli/icons/camera.svg';
import { ImagePicker } from '@al-bli/albli-ui';

const {
    'picker-container': cls_pickerContainer,
    'image-picker': cls_imagePicker,
    'picker-label': cls_pickerLabel,
    'camera-icon': cls_cameraIcon,
    'picker-text': cls_pickerText
} = styles;

export const PublishPageImagePicker: FC = () => {
    return (
        <div className={cls_pickerContainer}>
            <label className={cls_pickerLabel} htmlFor='image-picker' ></label>
            <CameraIcon className={cls_cameraIcon} />
            <ImagePicker
                onChange={() => ({})}
                className={cls_imagePicker}
            />
            <p className={cls_pickerText} >
                <FormattedMessage id='upload-photos' />
            </p>
        </div>
    );
};
