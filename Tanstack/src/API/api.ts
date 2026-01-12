import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch the data
export const fetchPostsOld = async () => {
  const response = await api.get("/posts");
  return response;
};

// to fetch paginated posts data
export const fetchPostsRQ = async (pageNumber: number) => {
  const response = await api.get(`/posts?_limit=10&_page=${pageNumber}`);
  console.log("class");
  return response.data;
};
// to fetch individual post data
export const fetchIndvPost = async (id: string | undefined) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

// to delete a post
export const deletePost = async (id: number) => {
  return await api.delete(`/posts/${id}`);
};

// to update a post
export const updatePost = async (id: number) => {
  const response = await api.patch(`/posts/${id}`, `title=Updated Title`);
  return response.data;
};
