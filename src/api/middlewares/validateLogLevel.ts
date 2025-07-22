import { Request, Response, NextFunction } from "express";
import { logLevelRequestBody } from "../types";


export function validateLogLevelRequest(
    req: Request<{},any, logLevelRequestBody>,
    res: Response,
    next: NextFunction
) {

    const {Type: errorType, Name: errorName, Description: errorDescription} = req.body;

    try {
        if (
            typeof errorType !== 'string' &&
            typeof errorName !== 'string' &&
            typeof errorDescription !== 'string'
        )
            throw new Error;
        if( 
            errorType.toLocaleLowerCase() !== 'warning' &&
            errorType.toLocaleLowerCase() !== 'info'
        )
            throw new Error;
        if (!errorName.trim() || !errorDescription.trim()) {
            throw new Error;
        }
    } catch(err: any) {
        if (err) return res.status(400).send("Bad log level format");
    }
    next();
}