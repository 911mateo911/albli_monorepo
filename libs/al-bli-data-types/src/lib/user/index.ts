import { Product, Image } from '../product';

export interface User {
    profilePic?: Image;
    userId: string;
    name: string;
    bio?: string;
    userName: string;
    email: string;
    whatsapp?: number;
    telephone?: number;
    likes: Product[];
    favorites: Product[];
}

export interface UserFromDb extends User {
    password: string;
}

export interface UserWithCredential extends Omit<User, 'likes' | 'favorites' | 'userId'> {
    password: string;
}
