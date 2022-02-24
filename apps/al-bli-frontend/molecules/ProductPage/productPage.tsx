import { padNumber } from '@al-bli/albli-ui';
import classNames from 'classnames';
import { FC } from 'react';
import { ImagesViewer, PostControl } from './components';
import styles from './productPage.module.scss';
import { ReactComponent as LocationIcon } from '@al-bli/icons/location-outline.svg';
import { InfoBox } from './components/infoBox';
import { ReactComponent as CategoryIcon } from '@al-bli/icons/category.svg';

const fakeDescription = `Audi Q8 50TDI  3X Sline ( 286Hp) Quattro ✅
** Viti Prodhimit 10-2018 ** 
📂 Panorama 
📂Head Up Display 
📂 58.900km 
📂Blind Spot Assist 
📂Distance Warning System 
📂Ambieng Light 
📂Sports Package 
📂Tauch Screen 
📂WIFI System 
📂(AdBlue-Technologie) 
📂 - Sound-System Bang & Olufsen 
📂Matrix Led Adaptive 
📂Sline Sport + 
📂GARANCI DERI NË 04-11-2021
📂 Extra Full OPSION 🔥 
Çmimi : 70,000€ Me TVSH 👍
`

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

  const additionalInfo = (className?: string) => {
    return (
      <div className={classNames(styles['info-box-container'], className)} >
        <InfoBox
          icon={CategoryIcon}
          info={[
            {
              type: 'Kategorite',
              value: 'Automjete, Makine'
            }
          ]}
        />
        <InfoBox
          icon={CategoryIcon}
          color='#f6655a'
          info={[
            {
              type: 'Marka',
              value: 'Audi'
            }
          ]}
        />

        <InfoBox
          icon={CategoryIcon}
          color='#87c289'
          info={[
            {
              type: 'Karburanti',
              value: 'Benzine'
            }
          ]}
        />

        <InfoBox
          icon={CategoryIcon}
          info={[
            {
              type: 'Modeli',
              value: 'Q8'
            }
          ]}
        />
      </div>
    )
  }

  return (
    <div className={styles.wrapper} >
      <div className={styles['image-viewer-container']} >
        <div className={styles['image-viewer-wrapper']} >
          <ImagesViewer photos={fakePhotos} />
        </div>
        {additionalInfo(styles['info-box-hide-tablet'])}
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
              {keyword}
            </p>
          ))}
        </div>
        <h2 className={classNames(styles['post-title'], styles['with-border-bottom'])} >
          Shitet audi q5 i 2010, title here, hello world
        </h2>
        <span className={styles['header-info-wrapper']} >
          {location(styles['location-hide-mobile'])}
          <p className={classNames(styles['header-info-text'], styles.price)} >
            {padNumber(120333)} ALL
          </p>
        </span>
        <p className={styles.details} >Vecorite</p>
        {additionalInfo(styles['info-box-hide-desktop'])}
        <h3 className={classNames(styles.description, styles['with-border-bottom'])} >Pershkrimi</h3>
        <p className={styles['description-text']} >{fakeDescription}</p>
      </div>
    </div>
  )
}
