/* eslint-disable @next/next/no-img-element */
import { FC, useState } from 'react';
import { ImagesViewerProps } from './imagesViewer.interface';
import styles from './imagesViewer.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import classNames from 'classnames';
import { ReactComponent as FullScreenIcon } from '@al-bli/icons/fullscreen-outline.svg';
import { useClickOutside } from '@al-bli/albli-ui';

// TODO: lazy loading, fullscreen carousel
export const ImagesViewer: FC<ImagesViewerProps> = ({
    wrapperClassName,
    photos
}) => {
    const [isFullScreenCarouselOpen, setFullScreenCarouselOpen] = useState<boolean>(false);
    const ref = useClickOutside(() => setFullScreenCarouselOpen(false));

    return (
        <div className={classNames(wrapperClassName, styles['swiper-container'])} >
            <Swiper
                direction='horizontal'
                modules={[Pagination]}
                className={styles.swiper}
                pagination={{
                    clickable: true
                }}
            >
                {photos.map((imageUrl) => (
                    <SwiperSlide
                        className={styles['swiper-image-wrapper']}
                        key={imageUrl} >
                        <img
                            src={imageUrl}
                            className={styles['swiper-image']}
                            alt='selected photos'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <FullScreenIcon
                className={styles['full-screen-icon']}
                onClick={() => setFullScreenCarouselOpen(true)}
            />
        </div>
    )
}
