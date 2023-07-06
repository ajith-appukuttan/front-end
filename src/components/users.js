import { useEffect, useState } from "react";
import Posts from "./posts";
import "../App.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="app-h1">User List</h1>
      {users.map(user => (
        <div key={user.id} className="app-container">
          <h2>{user.id} {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
           <Posts userId={user.id} />
          <hr />
        </div>
      ))}
    </div>
  );
}
