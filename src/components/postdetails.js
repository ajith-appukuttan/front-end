import { useEffect, useState } from "react";
import "../App.css";

export default function PostDetails(props) {
  let showContent=false;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const userId=props.userId;
    fetch('https://jsonplaceholder.typicode.com/posts?userId='+userId)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, [showContent]);
  function showPost(){
   showContent=true
  }

  return (
    <div>
      <button type ="button" className="app-h1-post" onclick={showPost()} >Posts {posts.length}</button>
      {showContent && posts.map(post => (
       <div  className="content">
          <h2>{post.id} {post.title}</h2>
          <p>Content: {post.body}</p>
          <hr />
        </div >
      ))} 
    </div>
  );
}
