import { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>User : {users.length} </h3>
    </div>
  );
}
