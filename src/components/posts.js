import { useEffect, useState } from "react";
import "../App.css";

export default function Posts(props) {
 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const userId=props.userId;
    fetch('https://jsonplaceholder.typicode.com/posts?userId='+userId)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  function  showPost(){
    console.log("showPostDetails");
  }
  return (
    <div>
      Number of Posts:<input type ="button"  onClick ={ showPost } value ={posts.length}/>
    </div>
  );
}
