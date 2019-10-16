import React, { useState, useEffect } from "react";

import FriendsCard from "./FriendsCard";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import AddFriend from "./AddFriend";

const FriendsContainer = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log(err.response));
  });

  return (
    <div>
      THIS IS THE CONTAINER
      <div>
        <p>ADD FRIEND</p>
        <AddFriend />
      </div>
      {friends.map((friend, index) => {
        return <FriendsCard key={index} friends={friend} />;
      })}
    </div>
  );
};

export default FriendsContainer;
