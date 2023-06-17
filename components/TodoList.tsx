import React, { useState } from "react";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import { fetchData, postData } from "../api/common";
import { AxiosResponse } from "axios";
import { APINamesEnum } from "../api/apiNames";
import { Box, Stack } from "@mui/material";
import { ITodo } from "../interfaces/ITodoDto";
import Todo from "./Todo";
import Header from "./Header";

export default function TodoList() {
  const { data, isLoading } = useQuery([APINamesEnum.getAllTodos], () =>
    fetchData<AxiosResponse<ITodo[]>>(APINamesEnum.getAllTodos)
  );
  const result = data?.data;
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  return (
    <>
      {isLoading ? (
        <span>Loading..</span>
      ) : (
        <Box>
          <Header selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
          <Stack spacing={2}>
            {result?.map((todo) => (
              <Todo
                todoBody={todo}
                setSelectedIds={setSelectedIds}
                key={todo.id}
              />
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
}
