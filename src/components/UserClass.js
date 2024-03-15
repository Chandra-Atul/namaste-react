import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 1,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>count1: {count1}</h1>
        <h1>count2: {count2}</h1>

        <h2>Name: {name}</h2>
        <h3>location: {location}</h3>
        <h4>Contact: @atulchandra021</h4>
      </div>
    );
  }
}

export default UserClass;
