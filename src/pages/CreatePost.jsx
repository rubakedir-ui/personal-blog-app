import BlogForm from "../components/BlogForm";
import { useState } from "react";

function CreatePost() {

  const [posts, setPosts] = useState([]);

  function handleCreatePost(newPost) {
    setPosts((prevPosts) => [...prevPosts, newPost]);

    console.log("New post:", newPost);
  }


  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-5">
        Create New Post
        
      </h2>

      <BlogForm onSubmit={handleCreatePost} />

    </div>
  );
}

export default CreatePost;