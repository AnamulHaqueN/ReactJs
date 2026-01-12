import { useEffect, useState } from "react";
import { fetchPostsOld } from "../API/api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getPostsData = async () => {
    console.log("Fetching posts data...");
    try {
      const res = await fetchPostsOld();
      console.log("status:", res.status);
      if (res.status === 200) {
        setPosts(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  if (loading) return <p> Loading .....</p>;
  if (error) return <p> Something went wrong ! </p>;

  return (
    <div>
      <ul className="section-accordion">
        {posts.map((post: any) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchOld;
