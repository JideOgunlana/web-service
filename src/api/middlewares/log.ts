import { Request, Response, NextFunction } from 'express';


export const logger = (
    req: Request, 
    res: Response,
    next: NextFunction
) => {
    console.log(`${req.timestamp} ${ req.method } ${req.ip} ${req.originalUrl}`);
    next();
}