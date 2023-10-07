import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./Post";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?limit=5")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  function handleDelete(postID) {
    const update = posts.filter((post) => post.id !== postID);
    setPosts(update);
  }
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </>
  );
}
