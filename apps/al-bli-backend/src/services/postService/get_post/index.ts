import { RequestHandler } from "express";
import { CONFIG } from '@al-bli/al-bli-config-files';

export const get_post_handler: RequestHandler = (req, res) => {
    const { [CONFIG.POSTPARAMS.GET_POST_ID_KEY]: postId } = req.body;

    res.send({})
}
