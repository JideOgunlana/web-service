import { Request, Response, NextFunction } from 'express';


export function serverErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  console.error("Server Error:", err.stack || err);

  res.status(status).json({error: message });

  next();
}


export function payloadErrorHandler(
    err: any, 
    req: Request, 
    res: Response, 
    next: NextFunction
) {
    if (err && 'body' in err) {
        console.error('Bad JSON');

        return res.status(400).json({ error: 'Invalid JSON payload' });
    }
    next();

}