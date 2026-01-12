import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch the data
export const fetchPosts = async () => {
  const response = await api.get("/posts");
  return response;
};

// to fetch individual post data
export const fetchIndvPost = async (id: string | undefined) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};
