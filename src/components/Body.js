import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // local State Variable - super powerful variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);


    useEffect(()=>{
      fetchData();
    }, []);


    const fetchData = async () =>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5976892&lng=88.46703219999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      

    };
    
    if(ListOfRestaurants.length === 0){
      return <Shimmer/>
    }



    return (
      <div className="body">
        <div className="body">
            
            <button 
                className="filter-btn"  
                onClick={()=>{
                    const filteredList = ListOfRestaurants.filter((res)=>res.info.avgRating>4.5
                    );
                    setListOfRestaurants(filteredList);
            
                }}       
            >
            Top Rated restaurant</button>
            
        </div>
        <div className="res-container">
          {ListOfRestaurants.map((restaurant)=>(
              <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
            ))}
        </div>
      </div>
    );
  };

export default Body;