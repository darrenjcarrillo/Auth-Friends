import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWIthAuth";

const AddFriend = () => {
  // console.log(` ADDFRIEND PROPS`, props);
  const [addFriend, setAddFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = e => {
    setAddFriend({ ...addFriend, [e.target.name]: e.target.value });
    console.log(`THIS IS ADD FRIEND`, AddFriend);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // let newFriend = {
    //   name: addFriend.name,
    //   age: addFriend.age,
    //   email: addFriend.email
    // }

    axiosWithAuth()
      .post("/api/friends", addFriend)
      .then(res => setAddFriend(res.data))
      .catch(err => console.log(err.response));
    document.getElementById("clear-input").reset();
  };

  return (
    <form id="clear-input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        label="name"
        placeholder="Name"
        value={addFriend.name}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="age"
        label="age"
        placeholder="Age"
        value={addFriend.age}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="email"
        label="email"
        placeholder="Email"
        value={addFriend.email}
        onChange={handleChanges}
      />
      <button>Add Friend</button>
    </form>
  );
};

export default AddFriend;
