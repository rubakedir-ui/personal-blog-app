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

      {/* Hero Section */}
      <section className="hero">

        <h1>
          Welcome to MinimalistBlog
        </h1>

        <p>
          A space for thoughtful narratives, minimalist design,
          and the art of sharing stories that matter.
        </p>

      </section>


      {/* Latest Stories */}

      <section className="stories">

        <div className="section-header">

          <div>
            <h2>
              Latest Stories
            </h2>

            <p>
              Discover the latest thoughts and narratives from our community.
            </p>
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