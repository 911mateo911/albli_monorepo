/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { ImagesViewerProps } from './imagesViewer.interface';
import styles from './imagesViewer.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import classNames from 'classnames';
import { ReactComponent as FullScreenIcon } from '@al-bli/icons/fullscreen-outline.svg';

// TODO: lazy loading, fullscreen carousel
export const ImagesViewer: FC<ImagesViewerProps> = ({
  wrapperClassName,
  photos,
  onFullScreenClick
}) => {
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
      {onFullScreenClick && (
        <FullScreenIcon
          className={styles['full-screen-icon']}
          onClick={onFullScreenClick}
        />
      )}
    </div >
  )
}
