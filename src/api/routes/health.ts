import { Router } from 'express';
import { logger } from '../middlewares'

export const router = Router();

router.get('/', logger, (req, res) => {
    res.send({
        message: "OK"
    })
})