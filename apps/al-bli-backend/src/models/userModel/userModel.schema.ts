import { UserFromDb } from "@al-bli/al-bli-data-types";
import * as Mongoose from "mongoose";

export const UserSchema = new Mongoose.Schema<UserFromDb>({
    name: String,
    userName: String,
    bio: {
        required: false,
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    whatsapp: {
        type: Number,
        required: false
    },
    telephone: {
        type: Number,
        required: false
    },
    profilePic: {
        imageUrl: String,
        imageId: String
    }
})

UserSchema.post('save', (error, _doc, next) => {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('A user with the given email is already registered'));
    }
    next(error);
})
