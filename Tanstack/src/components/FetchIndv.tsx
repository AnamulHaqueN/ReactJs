import { useParams } from "react-router-dom";
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
          <p>{data?.title}</p>
          <p>{data?.body}</p>
        </li>
      </ul>
    </div>
  );
};

export default FetchIndv;
