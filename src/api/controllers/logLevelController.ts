import { Request, Response, NextFunction } from "express";
import { logLevelResponseBody } from "../types";
import { buildSendUrl, formatMessage, sendHttpRequest } from "../helpers";


export async function handleLogLevelPost(req: Request, res: Response, next: NextFunction) {
  try {
    const { Type, Name, Description } = req.body;
    const sendUrl = buildSendUrl(req);
    const fwdMessageBody: logLevelResponseBody = {
      Type,
      Name,
      Description,
      Timestamp: req.timestamp,
    };
    const formattedMessage = formatMessage(Type, Name, Description);

    switch (Type.toLowerCase()) {
      case "warning": {
        const response = await sendHttpRequest(sendUrl, formattedMessage);
        const result = await response.json();

        if (!response.ok) {
          const error: any = new Error("Error forwarding message");
          error.status = response.status;
          error.details = result;
          throw error;
        }

        return res.status(201).json({
          message: "Message forwarded",
          data: fwdMessageBody,
        });
      }
      default:
        return res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
}
