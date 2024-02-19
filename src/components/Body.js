import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

    // local State Variable - super powerful variable
    const [ListOfRestaurants, setListOfRestaurants] = useState(resList);



    // let ListOfRestaurants = [];


    // Normal Js variable
    const ListOfRestaurantsJS = [
        {
            "info": {
              "id": "216675",
              "name": "Burger King",
              "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "locality": "Kasba",
              "areaName": "East Kolkata Township",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.4,
            }
        },{
            "info": {
                "id": "216676",
                "name": "KFC",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Kasba",
                "areaName": "East Kolkata Township",
                "costForTwo": "₹350 for two",
                "cuisines": [
                  "Burgers",
                  "American"
                ],
                "avgRating": 3.8,
            }
        },
        {
            "info": {
                "id": "216679",
                "name": "MCD",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Kasba",
                "areaName": "East Kolkata Township",
                "costForTwo": "₹350 for two",
                "cuisines": [
                  "Burgers",
                  "American"
                ],
                "avgRating": 4.5,
        },
    }];

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