import { RequestHandler } from "express";

export const withErrorCatch = (handler: RequestHandler): RequestHandler => (req, res, next) => {
    try {
        handler(req, res, next);
    } catch (error) {
        next(error);
    }
}
