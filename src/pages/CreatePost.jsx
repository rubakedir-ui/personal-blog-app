import { useState } from "react";

function CreatePost() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body: content,
    };

    console.log(newPost);

    setTitle("");
    setContent("");
  };


  return (
    <div className="create-page">

      <h2>Write a New Post</h2>

      <p>
        Clear your mind and let your words take center stage.
      </p>


      <form onSubmit={handleSubmit} className="post-form">


        <label>
          Title
        </label>

        <input
          type="text"
          placeholder="Give your thoughts a name..."
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <div className="image-upload">

          <span>🖼️</span>

          <p>
            Add a cover image (Optional)
          </p>

        </div>


        <label>
          Content
        </label>


        <textarea
          placeholder="Start writing here..."
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />


        <div className="buttons">

          <button type="button">
            Save Draft
          </button>


          <button className="publish">
            Publish Post
          </button>

        </div>


      </form>


    </div>
  );
}


export default CreatePost;