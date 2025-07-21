import { Request, Response, NextFunction } from 'express';


export const addTimestamp = (req: Request, res: Response, next: NextFunction) => {
    req.timestamp = Date.now();
    next();
}