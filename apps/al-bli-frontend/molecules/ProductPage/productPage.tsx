import { padNumber, Accordion } from '@al-bli/albli-ui';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { ImagesViewer } from '../../components';
import styles from './productPage.module.scss';
import { ReactComponent as CategoryIcon } from '@al-bli/icons/category.svg';
import { ReactComponent as AccordionIcon } from '@al-bli/icons/dropdown-arrow.svg';
import { ReactComponent as MailIcon } from '@al-bli/icons/mail-outline.svg';
import { ReactComponent as CallIcon } from '@al-bli/icons/call-outline.svg';
import { ReactComponent as WhatsappIcon } from '@al-bli/icons/logo-whatsapp.svg';
import { PostLocation, AdditionalInfo, PostControl, Chip } from './components';
import { InfoBoxProps } from './components/infoBox/infoBox.interface';
import { ContactButton } from './components/contactButton';

const fakeAdditionalInfo: InfoBoxProps[] = [
  {
    icon: CategoryIcon,
    info: [
      {
        type: 'Marka',
        value: 'Audi'
      }
    ],
    color: '#f6655a'
  },
  {
    icon: CategoryIcon,
    info: [
      {
        type: 'Date prodhimi',
        value: '20/12/2012'
      }
    ]
  },
  {
    icon: CategoryIcon,
    color: '#87c289',
    info:
      [
        {
          type: 'Karburanti',
          value: 'Benzine'
        }
      ]
  },

  {
    icon: CategoryIcon,
    info: [
      {
        type: 'Modeli',
        value: 'Q8'
      }
    ]
  },
  {
    icon: CategoryIcon,
    color: '#87c289',
    info: [
      {
        type: 'Kilometra',
        value: '123999'
      }
    ]
  },
  {
    icon: CategoryIcon,
    info: [
      {
        type: 'Transmisioni',
        value: 'Automatik'
      }
    ]
  }
];

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

const {
  'wrapper': cls_rootWrapper,
  'image-viewer-container': cls_imageViewerContainer,
  'image-viewer-wrapper': cls_imageViewerWrapper,
  'post-heading-wrapper': cls_postHeadingWrapper,
  'category-chip': cls_categoryChip,
  'post-title': cls_postTitle,
  'with-border-bottom': cls_withBorderBottom,
  'header-info-wrapper': cls_headerInfoWrapper,
  'header-info-text': cls_headerInfoText,
  'price': cls_price,
  'location-hide-desktop': cls_locationHideDesktop,
  'location-hide-mobile': cls_locationHideMobile,
  'contact-accordion-wrapper': cls_contactAccordionWrapper,
  'contact-accordion-text': cls_contactAccordionText,
  'accordion-icon': cls_accordionIcon,
  'accordion-icon_open': cls_accordionIconOpen,
  'details': cls_details,
  'info-box-hide-desktop': cls_infoBoxHideDesktop,
  'info-box-hide-tablet': cls_infoBoxHideTablet,
  'description': cls_description,
  'description-text': cls_descriptionText,
} = styles;

export const ProductPage: FC = () => {
  const [contactAccordionOpen, setContactAccordionOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper} >
      <div className={styles['image-viewer-container']} >
        <div className={styles['image-viewer-wrapper']} >
          <ImagesViewer photos={fakePhotos} />
        </div>
        <AdditionalInfo
          additionalInfos={fakeAdditionalInfo}
          wrapperClassName={styles['info-box-hide-tablet']}
        />
      </div>
      <div className={styles['post-heading-wrapper']} >
        <PostControl isLoggedIn={false} />
        <PostLocation
          wrapperClassName={classNames(
            styles['location-hide-desktop'],
            styles['header-info-text']
          )}
          location='Pallatet Fratari, Astir Tirane'
        />
        <div>
          {['Makine', 'Automjet', 'Audi', 'Q8', 'Shitet'].map((keyword, index) => (
            <Chip
              key={keyword + index}
              className={classNames(
                (index < 2) && styles['category-chip']
              )}
              onClick={() => ({})}
              text={keyword}
            />
          ))}
        </div>
        <h2 className={classNames(styles['post-title'], styles['with-border-bottom'])} >
          Shitet audi q5 i 2010, title here, hello world
        </h2>
        <span className={styles['header-info-wrapper']} >
          <PostLocation
            wrapperClassName={classNames(
              styles['location-hide-mobile'],
              styles['header-info-text']
            )}
            location='Pallatet Fratari, Astir Tirane'
          />
          <p className={classNames(styles['header-info-text'], styles.price)} >
            {padNumber(120333)} ALL
          </p>
        </span>
        <div
          className={styles['contact-accordion-wrapper']}
          onClick={() => setContactAccordionOpen(isOpen => !isOpen)}
        >
          <p className={styles['contact-accordion-text']} >
            {contactAccordionOpen ? 'Kontaktet' : 'Shiko kontaktet'}
          </p>
          <AccordionIcon className={classNames(
            styles['accordion-icon'],
            {
              [styles['accordion-icon_open']]: contactAccordionOpen
            }
          )} />
        </div>
        <Accordion
          transition
          offsetTop={4}
          open={contactAccordionOpen}
        >
          <ContactButton
            contact='malajmateo@gmail.com'
            mainIcon={<MailIcon />}
          />
          <ContactButton
            mainIcon={<CallIcon />}
            secondaryIcons={[<WhatsappIcon key='whatsapp' />]}
            contact='+355699675522'
          />
        </Accordion>
        <p className={styles.details} >Vecorite</p>
        <AdditionalInfo
          additionalInfos={fakeAdditionalInfo}
          wrapperClassName={styles['info-box-hide-desktop']}
        />
        <h3 className={classNames(styles.description, styles['with-border-bottom'])} >Pershkrimi</h3>
        <p className={styles['description-text']} >{fakeDescription}</p>
      </div>
    </div>
  )
}
