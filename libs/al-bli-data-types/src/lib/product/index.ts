export interface ProductImage {
    imageUrl: string;
    imageId: string;
}

export type CurrencyType = '$' | '€' | 'ALL';

/**
 * 1. change these when the backend is ready
 * 2. add types for the category and the subcategories if present
 */

type AutoCompleteProductProps = 'title' | "description"
    | "sellerId" | "location"
    | "price" | "isInSale"
    | "inSaleFor" | "date"
    | "sellerName" | "currency"
    | "debatablePrice"
    | "postId" | "slug";

type AutoCompleteProductWithoutImage = Pick<Product, AutoCompleteProductProps>;

export interface AutoCompleteProduct extends AutoCompleteProductWithoutImage {
    image: string;
    likes: number;
}

export interface Product {
    postId: string;
    title: string;
    debatablePrice: boolean;
    description: string;
    images: ProductImage[];
    location: string;
    price: number;
    isInSale: boolean;
    inSaleFor: Date | null;
    advertIndex: 1 | 2 | 3;
    sellerId: string;
    category: string;
    subCategory: string;
    favouritedBy: string[];
    keywords: string[];
    telephone: number;
    whatsapp?: number;
    email: string;
    date: Date,
    // do you need these ones?
    slug: string;
    sluggedKeywords: string;
    // get from the jwt
    sellerName: string;
    currency: CurrencyType;
    likes: string[];
    // add more if needed
}
