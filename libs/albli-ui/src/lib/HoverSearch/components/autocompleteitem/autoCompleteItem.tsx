import { FC } from 'react';
import { AutoCompleteProduct } from '@al-bli/al-bli-data-types';

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
        <div>
            {sellerName}
        </div>
    )
}
