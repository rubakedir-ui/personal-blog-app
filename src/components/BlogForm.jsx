import { useState } from "react";

function BlogForm({ onSubmit }) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      setMessage("❌ Please enter both the title and the content.");
      setMessageType("error");
      return;
    }

    onSubmit({
      title,
      body: content,
      id: Date.now(),
    });

    setMessage("🎉 Post published successfully!");
    setMessageType("success");

    setTitle("");
    setContent("");
  }


  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-xl mx-auto mt-10"
    >

      {message && (
        <p
          className={
            messageType === "error"
              ? "text-red-500 bg-red-100 p-3 rounded"
              : "text-green-500 bg-green-100 p-3 rounded"
          }
        >
          {message}
        </p>
      )}

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
        Publish Post
      </button>

    </form>
  );
}

export default BlogForm;