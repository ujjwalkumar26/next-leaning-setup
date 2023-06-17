import { NextApiResponse, NextApiRequest } from "next";
import { ITodo } from "../../interfaces/ITodoDto";
import { deleteData } from "./data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITodo[]>
) {
  var { ids } = req.body;
  deleteData(ids as string[]);
  res.status(200);
}
