import { FC } from 'react';
import { AutoCompleteProduct } from '@al-bli/al-bli-data-types';
import styles from './autoCompleteItem.module.scss';
import Image from 'next/image';
import { Chip } from './components';
import { ReactComponent as LocationIcon } from '../../../icons/location-outline.svg';
import { ReactComponent as LikeIcon } from '../../../icons/heart-outline.svg';
import { ReactComponent as CalendarIcon } from '../../../icons/calendar-outline.svg';
import classNames from 'classnames';
import TimeAgo from 'javascript-time-ago';
import sq from 'javascript-time-ago/locale/sq.json';
import { upperCase } from '../../../utils/toUpperCase';
TimeAgo.addLocale(sq);
const timeAgo = new TimeAgo('sq');

export const AutoCompleteItem: FC<AutoCompleteProduct> = ({
    sellerId,
    sellerName,
    location,
    title,
    price,
    likes,
    image,
    inSaleFor,
    isInSale,
    postId,
    slug,
    date,
    description,
    currency
}) => {
    return (
        <div className={styles['item-wrapper']} >
            <Image
                width={80}
                height={80}
                src={image}
                className={styles['item-image']}
                objectFit="cover"
            />
            <div className={styles['item-content-wrapper']} >
                <p className={styles['item-title']} >
                    {title}
                    <span className={styles['item-location']} >
                        <LocationIcon className={styles['item-location_icon']} />
                        {location}
                    </span>
                    <span className={styles['item-price']} >{price}{currency}</span>
                </p>
                <div className={styles['item-description-wrapper']} >
                    <p className={styles['item-description']} >{description}</p>
                    <p className={styles['item-seller']} >
                        Postuar nga: <br />
                        {sellerName}
                    </p>
                </div>
                <div className={styles['item-chips-container']} >
                    <Chip
                        wrapperClassName={classNames(
                            styles['item-chip']
                        )}
                        text={`${likes} pelqime`}
                        icon={<LikeIcon
                            className={classNames(
                                styles['item-chip_icon'],
                                styles['item-chip_icon__heart']
                            )}
                        />}
                    />
                    <Chip
                        wrapperClassName={classNames(
                            styles['item-chip']
                        )}
                        text={upperCase(timeAgo.format(date).toString())}
                        icon={<CalendarIcon
                            className={classNames(
                                styles['item-chip_icon'],
                                styles['item-chip_icon__calendar']
                            )}
                        />}
                    />
                </div>
            </div>
        </div>
    )
}
