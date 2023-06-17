import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postData } from "../api/common";
import { APINamesEnum } from "../api/apiNames";
import AddTodo from "./AddTodo";

export default function Header({
  selectedIds,
  setSelectedIds,
}: {
  selectedIds: Set<string>;
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
  return (
    <>
      <>First</>
      <AddTodo />
    </>
  );
}
