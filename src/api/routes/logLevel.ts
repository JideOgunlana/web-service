import { Router } from "express";
import { logger, validateLogLevelRequest } from "../middlewares";
import { handleLogLevelPost } from "../controllers";


export const router = Router();

router.post(
    '/', 
    logger, 
    validateLogLevelRequest,
    handleLogLevelPost
);