import { FC } from 'react';
import styles from './discount.module.scss';
import { ReactComponent as DiscountIcon } from '@al-bli/icons/discount.svg';
import { DiscountProps } from './discount.interface';
import { format } from 'date-fns';
import { padNumber } from '@al-bli/albli-ui';

const {
  'root-wrapper': cls_rootWrapper,
  'discount-icon': cls_discountIcon,
  'in-sale-text': cls_inSaleText,
  'in-sale-when': cls_inSaleWhen,
  'discounted-price': cls_discountedPrice
} = styles;

export const Discount: FC<DiscountProps> = ({
  endDate,
  newPrice,
  currency
}) => {
  return (
    <div className={cls_rootWrapper} >
      <DiscountIcon className={cls_discountIcon} />
      <span>
        <p className={cls_inSaleText} >Ne ulje!</p>
        <p className={cls_inSaleWhen} >Deri me: {format(endDate, 'dd/MM/yyyy')}</p>
      </span>
      <p className={cls_discountedPrice} >{padNumber(newPrice)} {currency}</p>
    </div>
  )
}
