import { LOGO_LINK } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src = {LOGO_LINK}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Conatct Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };



export default Header;