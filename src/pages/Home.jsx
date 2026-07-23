import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

function Home() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("https://dummyjson.com/posts?limit=10")
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
      })
      .catch(() => {
        setError("Failed to fetch. Please check your connection and try again.");
      });

  }, []);


  return (
    <div className="home">

      <section className="hero">

        <h1>
          Welcome to personal thought blog
        </h1>

        <p>
          A space for thoughtful narratives, personal design,
          and the art of sharing personal thought.
        </p>

      </section>

      <section className="stories">

        <div className="section-header">

          <div>
            <h2>
              Latest Stories
            </h2>
          </div>


          <button>
            + Create New Post
          </button>

        </div>
        {
          error && (
            <div className="error">
              ⚠️ {error}
            </div>
          )
        }



        <div className="blog-grid">

          {
            posts.map(post => (
              <BlogCard 
                key={post.id}
                post={post}
              />
            ))
          }

        </div>


      </section>


    </div>
  )
}


export default Home;