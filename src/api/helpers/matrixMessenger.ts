import { Request } from "express";
import { MATRIX_ACCESS_TOKEN, MATRIX_SERVER, MATRIX_ROOM_ID } from "./CONSTANTS";


export function buildSendUrl(req: Request): string {
  return `${MATRIX_SERVER}/_matrix/client/v3/rooms/${encodeURIComponent(MATRIX_ROOM_ID)}/send/m.room.message/`;
}

export async function sendHttpRequest(sendUrl: string, messageBody: string): Promise<Response> {
  return fetch(sendUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${MATRIX_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      msgtype: "m.text",
      body: messageBody,
    }),
  });
}


