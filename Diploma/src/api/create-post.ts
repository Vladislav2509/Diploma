import React from "react";


import { authorizedAxiosInstance } from "./authorizedAxiosInstance";

export const createPost = async (
  currentImage: File,
  text: string,
  lessonNum: number,
  title: string
) => {
  const url = "https://studapi.teachmeskills.by/blog/posts/";
  const formData = new FormData();
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  formData.append("text", text);
  formData.append("title", title);
  formData.append("lesson_num", `${lessonNum}`);
  formData.append("image", currentImage || "");

  const { data } = await authorizedAxiosInstance.post(url, formData, config);
  return data;
}; 