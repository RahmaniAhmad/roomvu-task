import { IPost } from "@/types/types";
import axios from "axios";

export const getPost = async (id: number) => {
  const data = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      return response.data as IPost;
    });
  return data;
};
