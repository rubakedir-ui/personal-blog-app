import { useAtom } from "jotai";
import { bookmarkAtom } from "../atoms/bookmarkAtoms";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Bookmarks(){

  const [bookmarks] = useAtom(bookmarkAtom);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const images = [
    "https://picsum.photos/id/20/600/400",
    "https://picsum.photos/id/29/600/400",
    "https://picsum.photos/id/42/600/400",
  ];
  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=3")
      .then((res) => res.json())
      .then((data) => {
        console.log("Trending posts:", data.posts);
        setTrendingPosts(data.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (

    <div className="bookmarks-page">


      {
        bookmarks.length === 0 ? (

          <div className="empty-bookmarks">


            <div className="bookmark-icon">
              🔖
            </div>


            <h2>
              No bookmarks yet
            </h2>


            <p>
              Save articles you want to read later by clicking
              the bookmark icon on any post preview.
            </p>


            <Link to="/">
              <button>
                Browse Latest Posts
              </button>
            </Link>


          </div>


        ) : (


          <div className="bookmark-list">


            {
              bookmarks.map(post => (

                <BlogCard
                  key={post.id}
                  post={post}
                />

              ))
            }


          </div>


        )
      }



<section className="trending">

<div className="trending-header">
  <h3>Explore Trending</h3>

  <Link to="/">View all</Link>
</div>

<div className="trend-grid">
  {trendingPosts.map((post, index) => (
    <BlogCard
      key={post.id}
      post={{
        ...post,
        image: images[index],
      }}
    />
  ))}
</div>

</section>

     


    </div>

  )

}


export default Bookmarks;