import { withErrorCatch } from "../../../utils/withErrorCatch";
import { CONFIG } from "@al-bli/al-bli-config-files";
import { RequestHandler } from "express";

export const publishPost: RequestHandler = withErrorCatch((req, res) => {

    res.send('ok')
});
