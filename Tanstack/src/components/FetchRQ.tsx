import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/api";
import { NavLink } from "react-router-dom";

const FetchOld = () => {
  const getPostsData = async () => {
    console.log("Fetching posts data...");
    try {
      const res = await fetchPosts();
      return res.status === 200 && res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsData,
    // gcTime: 1000,
    // staleTime: 10000,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchOld;
