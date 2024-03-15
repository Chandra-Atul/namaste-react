import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        name: "dummy name",
        location: "dummy location",
        company: "defualt",
        avatar_url: "http//:dummy-photo",
      },
    };
  }

  async componentDidMount() {
    //API Call
    const data = await fetch("https://api.github.com/users/Chandra-Atul");
    const json = await data.json();

    this.setState({
      userinfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, company, avatar_url } = this.state.userinfo;
    return (
      <div className="user-card">
        <img src={avatar_url} height="100px" width="100px"></img>
        <h2>Name: {name}</h2>
        <h3>location: {location}</h3>
        <h3>company: {company}</h3>
        <h4>Contact: @atulchandra021</h4>
      </div>
    );
  }
}

export default UserClass;
