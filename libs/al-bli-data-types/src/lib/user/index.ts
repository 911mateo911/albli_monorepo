import { Product } from '../product';

export interface User {
    profilePic?: string;
    userId: string;
    name: string;
    bio?: string;
    email: string;
    whatsapp?: number;
    telephone?: number;
    likes: Product[];
    favorites: Product[];
}

export interface UserWithCredential extends Omit<User, 'likes' | 'favorites' | 'userId'> {
    password: string;
}
