import React, { useState } from "react";
import {
  useQuery,
  useMutation,
  QueryClient,
  hashQueryKey,
} from "@tanstack/react-query";
import { fetchData, postData } from "../api/common";
import { AxiosResponse } from "axios";
import { APINamesEnum } from "../api/apiNames";
import { Stack } from "@mui/material";
import { ITodo } from "../interfaces/ITodoDto";
import Todo from "./Todo";

export default function TodoList({
  queryClient,
}: {
  queryClient: QueryClient;
}) {
  const { data, isLoading } = useQuery([APINamesEnum.getAllTodos], () =>
    fetchData<AxiosResponse<ITodo[]>>(APINamesEnum.getAllTodos)
  );
  const result = data?.data;
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { mutate } = useMutation(
    () => postData(APINamesEnum.deleteTodos, { ids: selectedIds }),
    {
      onSuccess: (data) => {
        console.log(data);
        const message = "success";
        alert(message);
      },
      onError: () => {
        alert("there was an error");
      },
      onSettled: () => {
        queryClient.invalidateQueries([APINamesEnum.getAllTodos]);
      },
    }
  );
  return (
    <>
      {isLoading ? (
        <span>Loading..</span>
      ) : (
        <Stack spacing={2}>
          {result?.map((todo) => (
            <Todo
              todoBody={todo}
              setSelectedIds={setSelectedIds}
              key={todo.id}
            />
          ))}
        </Stack>
      )}
    </>
  );
}
