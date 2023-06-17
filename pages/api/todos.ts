import { NextApiResponse, NextApiRequest } from "next";
import { ITodo } from "../../interfaces/ITodoDto";
import { getData } from "./data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ITodo[]>
) {
  res.status(200).json(getData());
}
