import { useState } from "react";

const User = (props) => {
  const [count1, setCount1] = useState(1);
  const [count2] = useState(2);

  return (
    <div className="user-card">
      <h1>count1 : {count1}</h1>
      <h1>count2 : {count2}</h1>

      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Contact: @atulchandra021</h4>
    </div>
  );
};

export default User;
