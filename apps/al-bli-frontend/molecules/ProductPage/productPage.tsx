import { padNumber } from '@al-bli/albli-ui';
import classNames from 'classnames';
import { FC, useMemo } from 'react';
import { ImagesViewer, PostControl } from './components';
import styles from './productPage.module.scss';
import { ReactComponent as LocationIcon } from '@al-bli/icons/location-outline.svg';
import { useMediaQuery } from 'react-responsive';

const fakePhotos = [
  'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/u5hsebdsqeg05eaeip1u.jpg',
  'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/rph9smkxzz25jotfgmyd.jpg',
  'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/mrj8airxoqueotdngch0.jpg',
  'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/pgoevqpos77bcyho0t1h.jpg'
]

export const ProductPage: FC = () => {
  const location = (className?: string) => {
    return (<p className={classNames(
      styles['header-info-text'],
      styles.location,
      className
    )} >
      <LocationIcon />
      Pallatet Fratari, Astir, Tirane
    </p>)
  }

  return (
    <div className={styles.wrapper} >
      <div className={styles['image-viewer-container']} >
        <div className={styles['image-viewer-wrapper']} >
          <ImagesViewer photos={fakePhotos} />
        </div>
      </div>
      <div className={styles['post-heading-wrapper']} >
        <PostControl isLoggedIn={false} />
        {location(styles['location-hide-desktop'])}
        <div>
          {['Makine', 'Audi', 'Q8', 'Shitet', 'Automjet'].map((keyword, index, arr) => (
            <p
              key={keyword + index}
              className={styles.chip}
            >
              {keyword}{index < (arr.length - 1) && ','}
            </p>
          ))}
        </div>
        <h2 className={styles['post-title']} >
          Shitet audi q5 i 2010, title here, hello world
        </h2>
        <span className={styles['header-info-wrapper']} >
          {location(styles['location-hide-mobile'])}
          <p className={classNames(styles['header-info-text'], styles.price)} >
            {padNumber(120333)} ALL
          </p>
        </span>
      </div>
    </div>
  )
}
