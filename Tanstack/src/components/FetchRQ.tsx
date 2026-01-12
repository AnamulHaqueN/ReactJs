import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, fetchPostsRQ } from "../API/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPostsRQ(pageNumber),
    //gcTime: 1000,
    staleTime: 10000,
    // refetchInterval: 5000,
    // refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
  });

  //!use mutation for delete operation
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: (data, id) => {
      //queryClient.invalidateQueries({ queryKey: ["posts", pageNumber] }); //refetching the data after deletion(use for real api)

      queryClient.setQueryData(["posts", pageNumber], (curElem: any) => {
        // use for fake api
        return curElem?.filter((post: any) => post.id !== id);
      });
    },
  });

  console.log("PageNumber:", pageNumber);
  if (isPending) return <p> Loading ....</p>;
  if (isError) return <p> Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((post: any) => (
          <li key={post.id}>
            <NavLink to={`/rq/${post.id}`}>
              <p>{post.id}</p>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </NavLink>
            <button onClick={() => deleteMutation.mutate(post.id)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
      <div className="pagination-section container">
        <button
          disabled={pageNumber === 1 ? true : false}
          onClick={() => setPageNumber((prev: number) => prev - 1)}
        >
          Prev
        </button>
        <p>{pageNumber}</p>
        <button
          disabled={pageNumber === data?.length ? true : false || isPending}
          onClick={() => setPageNumber((prev: number) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FetchRQ;
