import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function BlogDetails(){

    const {id} = useParams();

    const [post,setPost] = useState(null);
    const [comments,setComments] = useState([]);
    const images = [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      ];

    useEffect(()=>{

        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data));


        fetch(`https://dummyjson.com/comments/post/${id}`)
        .then(res=>res.json())
        .then(data=>setComments(data.comments));


    },[id]);



    if(!post){

        return <h2>Loading...</h2>

    }



return(


<div className="details-page">


    <Link className="back" to="/">
        ← Back to Home
    </Link>

    <article className="article-card">


        <div className="article-header">


            <div>

                <span className="tag">
                    Design
                </span>


                <span className="tag">
                    Productivity
                </span>

            </div>



            <button className="bookmark">
                ♧ Bookmark
            </button>


        </div>




        <h1>
            {post.title}
        </h1>

       
        <img
         src={images[post.id % images.length]}
         alt={post.title}
        className="article-image"
       />



        <p>
            {post.body}
        </p>


        <p>
            In an era of constant digital noise,
            meaningful design focuses on simplicity,
            clarity and human experience.
        </p>



        <p>
            Implementing this philosophy requires
            discipline and thoughtful decisions.
            Great design removes unnecessary elements.
        </p>


    </article>





    <section className="comments">


        <h2>
            Comments 
            <small>({comments.length})</small>
        </h2>



        {
            comments.map(comment=>(

                <div 
                className="comment-card"
                key={comment.id}
                >


                    <div>

                    <b>
                    {comment.user.username}
                    </b>


                    </div>


                    <p>
                    {comment.body}
                    </p>


                </div>

            ))
        }



    </section>



</div>


)


}


export default BlogDetails;