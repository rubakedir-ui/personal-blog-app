import { useState } from "react";

function BlogForm({ onSubmit }) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (title.trim() === "") {
      alert("Title cannot be empty");
      return;
    }


    onSubmit({
      title,
      body: content,
      id: Date.now(),
    });


    // Clear form after submit
    setTitle("");
    setContent("");
  }


  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-xl mx-auto mt-10"
    >

      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-3 rounded"
      />


      <textarea
        placeholder="Enter post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-3 rounded h-40"
      />


      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Create Post
      </button>


    </form>
  );
}


export default BlogForm;
