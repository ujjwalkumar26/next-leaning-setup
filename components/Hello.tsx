import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/common";
import { AxiosResponse } from "axios";
import { APINamesEnum } from "../api/apiNames";

export default function HelloWorld() {
  const { data, isLoading } = useQuery([APINamesEnum.helloWorld], () =>
    fetchData<AxiosResponse<string>>(APINamesEnum.helloWorld)
  );
  const output = data?.data ?? "something is wrong";
  return <>{isLoading ? <span>Loading..</span> : <h1>{output}</h1>}</>;
}
