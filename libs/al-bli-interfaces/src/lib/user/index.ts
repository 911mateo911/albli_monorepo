export interface User {
    title: string;
    profilePic?: string;
    name: string;
    email: string;
    whatsapp?: number;
    telephone: number;
    likes: string[];
    favorites: string[];
}

export interface UserWithCredential extends User {
    password: string;
}
