import { FC, useState, useEffect, useRef, ChangeEvent } from 'react';
import styles from './imagePicker.module.scss';
import { ReactComponent as CameraIcon } from '../icons/camera.svg';
import { ImageType } from './imagePicker.interface';

export const ImagePicker: FC = () => {
    const [images, setImages] = useState<ImageType[]>([]);
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

        setImages(withPreviewFiles);
    }

    useEffect(() => {
        // prevent memory leaks
        prevImages.current.map(({ preview }) => URL.revokeObjectURL(preview));

        prevImages.current = images;
    }, [images]);

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
                onChange={handleChange}
                name='image-picker'
            />
            <p className={styles['picker-text']} >Ngarko fotografi</p>
        </div>
    );
};
