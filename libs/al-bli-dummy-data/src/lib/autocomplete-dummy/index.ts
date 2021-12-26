import { AutoCompleteProduct } from '@al-bli/al-bli-data-types';
import { loremIpsum } from 'lorem-ipsum';

export const auto_complete_dummy_response = (): AutoCompleteProduct[] => [
    {
        date: new Date(),
        currency: "ALL",
        description: loremIpsum({ count: 4 }),
        image: "https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/rph9smkxzz25jotfgmyd.jpg",
        inSaleFor: new Date(),
        isInSale: true,
        likes: 45,
        location: 'Durres, Tirane',
        postId: "sakjdksm1312321iksad",
        title: "Audi A3 hatchback",
        sellerId: "1234i1932samdmasd",
        sellerName: "Eduard Merkaj",
        slug: "audi_a3_hatchback",
        price: 1300000,
        debatablePrice: true
    },
    {
        date: new Date(),
        currency: "ALL",
        description: loremIpsum({ count: 4 }),
        image: "https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/rph9smkxzz25jotfgmyd.jpg",
        inSaleFor: new Date(),
        isInSale: false,
        likes: 45,
        location: 'Durres, Tirane',
        postId: "sakjdksm1312321iksad",
        title: "Audi A3 hatchback",
        sellerId: "1234i1932samdmasd",
        sellerName: "Eduard Merkaj",
        slug: "audi_a3_hatchback",
        price: 1300000,
        debatablePrice: true
    },
    {
        date: new Date(),
        currency: "ALL",
        description: loremIpsum({ count: 4 }),
        image: "https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/rph9smkxzz25jotfgmyd.jpg",
        inSaleFor: new Date(),
        isInSale: true,
        likes: 45,
        location: 'Durres, Tirane',
        postId: "sakjdksm1312321iksad",
        title: "Audi A3 hatchback",
        sellerId: "1234i1932samdmasd",
        sellerName: "Eduard Merkaj",
        slug: "audi_a3_hatchback",
        price: 1300000,
        debatablePrice: false
    }
];
