import { ITodo } from "../../interfaces/ITodoDto";
var todoDict: Map<string, ITodo> = new Map();
export const getData: () => Array<ITodo> = () => {
  let result: ITodo[] = [];
  todoDict.forEach((x) => result.push(x));
  return result;
};
export const deleteData = (ids: string[]) => {
  ids.forEach((id) => todoDict.delete(id));
};
export const updateData = (newTodo: ITodo) => {
  todoDict.set(newTodo.id, newTodo);
};
