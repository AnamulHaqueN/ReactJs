import { NavLink, useParams } from "react-router-dom";
import { fetchIndvPost } from "../API/api";
import { useQuery } from "@tanstack/react-query";

const FetchIndv = () => {
  const { id } = useParams();
  console.log("Individual data param:", id);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchIndvPost(id),
  });

  if (isPending) return <p> Loading ....</p>;
  if (isError) return <p> Error: {error?.message || "Something went wrong"}</p>;
  return (
    <div>
      <ul className="section-accordion">
        <li key={data?.id}>
          <h3>Post ID: {data?.id}</h3>
          <p>{data?.title}</p>
          <p>{data?.body}</p>
          <button>
            <NavLink to="/rq">Back To Posts</NavLink>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FetchIndv;
