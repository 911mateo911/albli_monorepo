import { Router } from 'express';
import { withMappings } from './mappings';

class RouterInstance {
    private static instance: Router;

    static get getInstance() {
        if (!RouterInstance.instance) {
            RouterInstance.instance = Router();
        }

        return RouterInstance.instance;
    }
}

const instance = RouterInstance.getInstance;
export const ExpressRouter = instance;
export const AppRouter = withMappings(ExpressRouter);
