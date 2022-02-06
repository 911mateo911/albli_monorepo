import { FC, useRef, ChangeEvent } from 'react';
import { ImageType, ImagePickerProps } from './imagePicker.interface';

export const ImagePicker: FC<ImagePickerProps> = ({
    onChange,
    className
}) => {
    // ImageType contains also a preview key to serve as a url to preview the images
    // save prevImages so we can revoke the url to not cause memory leaks
    const prevImages = useRef<ImageType[]>([]);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        prevImages.current.map(({ preview }) => URL.revokeObjectURL(preview));

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

        prevImages.current = withPreviewFiles;

        // set modified imgs
        onChange(withPreviewFiles);
    }

    return (
        <input
            className={className}
            multiple
            type='file'
            aria-label='image-picker'
            id='image-picker'
            onChange={handleChange}
            name='image-picker'
        />
    );
};
