/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import styles from './imagePickerPreview.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import { ImagePickerPreviewProps } from './imagePickerPreview.interface';
import classNames from 'classnames';
import { PublishPageServiceInstance } from '../../publishPage.service';
import { useBehaviorSubject } from '@al-bli/albli-ui';
import { ReactComponent as DeleteIcon } from '@al-bli/icons/trash-outline.svg';

const {
    'swiper': cls_swiper,
    'swiper-image': cls_swiperImage,
    'delete-btn': cls_deleteBtn,
    'delete-btn_icon': cls_deleteBtnIcon,
    'no-images': cls_noImages,
    'swiper-image-wrapper': cls_swiperImageWrapper
} = styles;

export const ImagePickerPreview: FC<ImagePickerPreviewProps> = ({
    className
}) => {
    const photos = useBehaviorSubject(PublishPageServiceInstance.images);

    return (
        <Swiper
            className={classNames(className, cls_swiper)}
            direction='vertical'
            modules={[Pagination]}
            pagination={{
                clickable: true
            }}
        >
            {(!photos.length) && (
                <SwiperSlide className={cls_swiperImageWrapper} >
                    <p className={cls_noImages} >Nuk eshte zgjedhur asnje foto.</p>
                </SwiperSlide>
            )}
            {photos.map(({ preview }) => (
                <SwiperSlide
                    className={cls_swiperImageWrapper}
                    key={preview} >
                    <img
                        src={preview}
                        className={cls_swiperImage}
                        alt='selected photos'
                    />
                    <span
                        onClick={() => PublishPageServiceInstance.removeImage(preview)}
                        className={cls_deleteBtn} >
                        <DeleteIcon className={cls_deleteBtnIcon} />
                        Hiqe
                    </span>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
