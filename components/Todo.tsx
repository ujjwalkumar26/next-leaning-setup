import React from "react";
import { ITodo } from "../interfaces/ITodoDto";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { APINamesEnum } from "../api/apiNames";
import { postData } from "../api/common";

export default function Todo({
  todoBody,
  setSelectedIds,
}: {
  todoBody: ITodo;
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>;
}) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (ids: string[]) => postData(APINamesEnum.deleteTodos, { ids }),
    {
      onSuccess: (data) => {
        setSelectedIds(new Set());
      },
      onError: (error) => {
        console.log(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries([APINamesEnum.getAllTodos]);
      },
    }
  );
  return <>{todoBody}</>;
}
