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
        location: 'Kompleksi Prestige, Rruga e burgut, Tirane',
        postId: "287381783883217",
        title: loremIpsum({ count: 1 }),
        sellerId: "1234i1932samdmasd",
        sellerName: "Aleksandri i Maqedonis",
        slug: "audi_a3_hatchback",
        price: 2139213093120302310,
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
        location: 'Pallatet Fratari, Astir, Tirane',
        postId: "ssdsdadasdas",
        title: "Shes filma shqip me titra",
        sellerId: "1234i1932samdmasd",
        sellerName: "Madara Uchihahhha",
        slug: "audi_a3_hatchback",
        price: 192039021930203192,
        debatablePrice: false
    },
    {
        date: new Date(),
        currency: "ALL",
        description: loremIpsum({ count: 4 }),
        image: "https://res.cloudinary.com/dxtjwhnoz/image/upload/v1626531888/alBli/rph9smkxzz25jotfgmyd.jpg",
        inSaleFor: new Date(),
        isInSale: true,
        likes: 45,
        location: 'Pallatet Fratari, Astir, Tirane',
        postId: "209302190129039",
        title: "Shes filma shqip me titra",
        sellerId: "1234i1932samdmasd",
        sellerName: "Madara Uchihahhha",
        slug: "audi_a3_hatchback",
        price: 1300000,
        debatablePrice: false
    }
];
