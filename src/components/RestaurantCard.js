import { CDN_LINK } from "./utils/constants";
import resList from "./utils/mockData";


// way to apply style inline
const stylecard = {
    backgroundColor: "#f0f0f0",
  };
  

const RestaurantCard = (props) => {
    const {resData} = props; 
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime
    } = resData?.info;
  
    
    return (
      <div className="res-card" style={stylecard}>
        <img
          className="res-logo"
          alt="res-logo"
          src = {CDN_LINK+resData.info.cloudinaryImageId }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>{resData.sla.deliveryTime}mins</h4> */}
      </div>
    );
  };

  
export default RestaurantCard;