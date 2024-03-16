import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste React web Application</h2>

      {/* <User name={"Atul chandra (function)"} location={"Kolkata"} /> */}

      <UserClass name={"Atul  Chandra (class)"} location={"Kolkata"} />
    </div>
  );
};

export default About;
