import { ITodo } from "../../interfaces/ITodoDto";
var listOfTodos: ITodo[] = [];
export const getData = () => listOfTodos;
export const deleteData = (ids: string[]) => {
  listOfTodos = listOfTodos.filter((todo) => !ids.includes(todo.id));
};
export const updateData = (newTodo: ITodo) => {
  let index = listOfTodos.findIndex((todo) => todo.id == newTodo.id);
  if (index == -1) {
    listOfTodos.push(newTodo);
  } else listOfTodos[index] = newTodo;
};
