import { Product } from '../product';

export interface User {
    profilePic?: string;
    name: string;
    bio?: string;
    email: string;
    whatsapp?: number;
    telephone?: number;
    likes: Product[];
    favorites: Product[];
}

export interface UserWithCredential extends User {
    password: string;
}
