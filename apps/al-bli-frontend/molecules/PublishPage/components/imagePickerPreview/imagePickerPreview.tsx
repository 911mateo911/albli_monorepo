import { FC } from 'react';
import styles from './imagePickerPreview.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import { ImagePickerPreviewProps } from './imagePickerPreview.interface';
import classNames from 'classnames';

export const ImagePickerPreview: FC<ImagePickerPreviewProps> = ({
    className
}) => {
    return (
        <Swiper
            className={classNames(className)}
            direction='vertical'
            modules={[Pagination]}
            pagination={{
                clickable: true
            }}
        >

        </Swiper>
    );
};
