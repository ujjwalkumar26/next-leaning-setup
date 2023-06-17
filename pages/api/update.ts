import { NextApiResponse, NextApiRequest } from "next";
import { ITodo } from "../../interfaces/ITodoDto";
import { updateData } from "./data";
import { randomUUID } from "crypto";
import { IUpdateBody } from "../../interfaces/IUpdateBody";
import { TodoType } from "../../interfaces/todoType.enum";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITodo[]>
) {
  var todo = req.body as IUpdateBody;
  updateData({
    timestamp: new Date(todo.timestamp),
    body: todo.body,
    id: todo.id ?? randomUUID(),
    type: todo.type as TodoType,
  });
  res.status(200);
}
