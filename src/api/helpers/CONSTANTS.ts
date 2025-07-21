import * as dotenv from "dotenv";

dotenv.config();

export const MATRIX_ACCESS_TOKEN = process.env.MATRIX_ACCESS_TOKEN!;
export const MATRIX_ROOM_ID = process.env.MATRIX_ROOM_ID!;
export const MATRIX_SERVER = "https://matrix.org";