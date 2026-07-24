import { useState } from "react";
import { Link } from "react-router-dom";


function BlogCard({post}) {

    if (!post) {
        return <p>No post found.</p>;
 }
return (

<div className="card">

  
<div className="tags">

<span>
#design
</span>

<span>
#personal
</span>

</div>


<h3>
{post.title}
</h3>


<p>
{post.body.substring(0,100)}...
</p>


<div className="card-footer">

<Link to={`/blog/${post.id}`}>
Read More →
</Link>



</div>


</div>

)

}

export default BlogCard;