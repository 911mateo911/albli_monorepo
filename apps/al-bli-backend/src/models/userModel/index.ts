import * as Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import { UserWithCredential } from '@al-bli/al-bli-data-types';

export const UserValidationSchema = Joi.object<UserWithCredential>({
    name: Joi.string().min(8).max(40).pattern(/^[a-z '-]+$/i).required(),
    bio: Joi.string().min(4).max(200),
    email: Joi.string().pattern(/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/).required(),
    password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/).required(),
    telephone: Joi.string().pattern(/^(?:[+\d].*\d|\d)$/)
}).required();

export const validate_user = (req: Request, res: Response, next: NextFunction) => {
    next();
}
