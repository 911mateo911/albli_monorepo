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
import { upperCase, padNumber, truncate } from '../../../utils';
import { ReactComponent as SaveIcon } from '../../../icons/bookmark-outline.svg';
import { ReactComponent as CashIcon } from '../../../icons/cash-outline.svg';
import { ReactComponent as PriceTagIcon } from '../../../icons/pricetags-outline.svg';
import { ReactComponent as ShareIcon } from '../../../icons/share-outline.svg';
import { useMediaQuery } from 'react-responsive';
import { getValuePerBreakPoint } from './helpers';
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
    currency,
    debatablePrice
}) => {

    const isTablet = useMediaQuery({ query: '(max-width: 760px) and (min-width: 630px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 630px)' });

    return (
        <div className={styles['item-wrapper']} >
            <Image
                width={getValuePerBreakPoint<number>(isTablet, isMobile, 200, 100)}
                height={getValuePerBreakPoint<number>(isTablet, isMobile, 200, 100)}
                src={image}
                className={styles['item-image']}
                objectFit="cover"
            />
            <div className={styles['item-content-wrapper']} >
                <div className={styles['item-title-wrapper']} >
                    <p className={classNames(styles['item-title'], styles['truncated-text'])} >{title}</p>
                    <span className={styles['item-location-wrapper']} >
                        <span className={classNames(styles['item-location'], styles['truncated-text'])} >
                            <LocationIcon className={styles['item-location_icon']} />
                            {truncate(location, isTablet ? 50 : 35)}
                        </span>
                    </span>
                    <span className={styles['item-save__icon__wrapper']} >
                        <SaveIcon
                            className={styles['item-save__icon']}
                        />
                    </span>
                    <ShareIcon
                        className={styles['item-share__icon']}
                    />
                    <span className={styles['item-price-wrapper']} >
                        <p className={classNames(
                            styles['item-seller-mobile'],
                            styles['truncated-text']
                        )}>
                            {sellerName}
                        </p>
                        <p className={classNames(
                            styles['item-price'],
                            styles['truncated-text']
                        )} >
                            {padNumber(price)} {currency}
                        </p>
                    </span>
                </div>
                <p className={classNames(
                    styles['item-title-mobile']
                )} >{title}</p>
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
                    {debatablePrice && <Chip
                        text='Cmim i diskutueshem'
                        wrapperClassName={classNames(
                            styles['item-chip'],
                            styles['item-chip_wColor']
                        )}
                        icon={<PriceTagIcon
                            className={classNames(
                                styles['item-chip_icon'],
                                styles['item-chip_icon__calendar']
                            )}
                        />}
                    />}
                    {isInSale && <Chip
                        text='Ne ulje'
                        wrapperClassName={classNames(
                            styles['item-chip'],
                            styles['item-chip_wColor']
                        )}
                        icon={<CashIcon
                            className={classNames(
                                styles['item-chip_icon'],
                                styles['item-chip_icon__calendar']
                            )}
                        />}
                    />}
                </div>
            </div>
        </div>
    )
}
