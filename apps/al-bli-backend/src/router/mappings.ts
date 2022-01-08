import { Router } from "express";
import { CONFIG } from '@al-bli/al-bli-config-files';
import { getPost, publishPost } from "../controllers";

export const withMappings = (router: Router): Router => {
    // LOGIN ROUTER
    // router.get(CONFIG.ROUTES.LOGIN_AUTH, login);

    // POST ROUTES
    router.get(CONFIG.ROUTES.GET_POST, getPost);
    router.post(CONFIG.ROUTES.PUBLISH_POST, publishPost);

    // SEARCH ROUTES

    return router
}
