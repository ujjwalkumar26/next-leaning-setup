import axios from "axios";
import { APINamesEnum } from "./apiNames";
export const getAPIURL = (
  apiName: APINamesEnum,
  urlParams?: string[],
  queryParams?: object
): string => {
  let url = "/api/";
  switch (apiName) {
    case APINamesEnum.helloWorld:
      url += `hello`;
      break;
    case APINamesEnum.getAllTodos:
      url += "todos";
      break;
    case APINamesEnum.updateTodo:
      url += "update";
      break;
    case APINamesEnum.deleteTodos:
      url = "deleteTodo";
      break;
  }
  url += getURLParamsString(urlParams);
  url += getQueryParamsString(queryParams);
  return url;
};

export const fetchData = async <T>(
  apiName: APINamesEnum,
  urlParams?: string[],
  queryParams?: object
): Promise<T> => {
  return axios.get(`${getAPIURL(apiName, urlParams, queryParams)}`);
};

export const postData = async <T>(
  apiName: APINamesEnum,
  dataObject: any,
  urlParams?: string[],
  queryParams?: object
): Promise<T> => {
  return axios.post(
    `${getAPIURL(apiName, urlParams, queryParams)}`,
    dataObject
  );
};

function getURLParamsString(urlParams?: string[]): string {
  if (!urlParams) return "";
  return "/" + urlParams.join("/");
}

function getQueryParamsString(queryParams?: object): string {
  if (!queryParams || Object.keys(queryParams).length === 0) return "";
  return (
    "?" +
    Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
  );
}
