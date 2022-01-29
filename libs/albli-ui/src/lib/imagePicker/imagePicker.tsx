import { FC, useState, useEffect, useRef, ChangeEvent } from 'react';
import styles from './imagePicker.module.scss';
import { ReactComponent as CameraIcon } from '../icons/camera.svg';
import { ImageType } from './imagePicker.interface';
import { FormattedMessage } from 'react-intl';

const {
    'picker-container': cls_pickerContainer,
    'image-picker': cls_imagePicker,
    'picker-label': cls_pickerLabel,
    'camera-icon': cls_cameraIcon,
    'picker-text': cls_pickerText
} = styles;

export const ImagePicker: FC = () => {
    // ImageType contains also a preview key to serve as a url to preview the images
    const [images, setImages] = useState<ImageType[]>([]);
    // save prevImages so we can revoke the url to not cause memory leaks
    const prevImages = useRef<ImageType[]>([]);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const files = target.files;

        if (!files) return;

        const withPreviewFiles: ImageType[] = [];

        // for loop as we cant iterate through a FileList
        for (let index = 0; index < Number(files?.length); index++) {
            withPreviewFiles.push(Object.assign(
                files[index],
                {
                    preview: URL.createObjectURL(files[index])
                }
            ));
        }

        // set modified imgs
        setImages(withPreviewFiles);
    }

    useEffect(() => {
        // revoke objectUrls to  prevent memory leaks
        prevImages.current.map(({ preview }) => URL.revokeObjectURL(preview));

        // update the prevImages to contain latest data
        prevImages.current = images;
    }, [images]);

    return (
        <div className={cls_pickerContainer}>
            <label className={cls_pickerLabel} htmlFor='image-picker' ></label>
            <CameraIcon className={cls_cameraIcon} />
            <input
                className={cls_imagePicker}
                multiple
                type='file'
                aria-label='image-picker'
                id='image-picker'
                onChange={handleChange}
                name='image-picker'
            />
            <p className={cls_pickerText} >
                <FormattedMessage id='upload-photos' />
            </p>
        </div>
    );
};
