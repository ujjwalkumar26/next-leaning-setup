import { TodoType } from "./todoType.enum";

export interface ITodo {
  timestamp: Date;
  body: string;
  id: string;
  type: TodoType;
}
