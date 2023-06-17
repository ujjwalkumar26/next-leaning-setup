import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postData } from "../api/common";
import { APINamesEnum } from "../api/apiNames";
import { ITodo } from "../interfaces/ITodoDto";
import { IUpdateBody } from "../interfaces/IUpdateBody";

export default function AddTodo({ oldTodo }: { oldTodo?: ITodo }) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (updateBody: IUpdateBody) => postData(APINamesEnum.updateTodo, updateBody),
    {
      onSuccess: (data) => {},
      onError: (error) => {
        console.log(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries([APINamesEnum.getAllTodos]);
      },
    }
  );
  const isOldTodo = oldTodo != undefined && oldTodo != null;
  return <>{isOldTodo ? "Edit Todo" : "Add todo"}</>;
}
