import { useEffect, useState } from "react";
import "./Friend.jsx";
import Friend from "./Friend.jsx";
import "./Friends.css";
export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="box">
      <h2>Friends : {friends.length}</h2>
      {friends.map((friend) => {
        return <Friend friend={friend}></Friend>;
      })}
    </div>
  );
}
