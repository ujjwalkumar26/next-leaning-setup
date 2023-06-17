import React from "react";
import { ITodo } from "../interfaces/ITodoDto";
export default function Todo({
  todoBody,
}: {
  todoBody: ITodo;
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return <>{todoBody}</>;
}
