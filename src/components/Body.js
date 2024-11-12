import RestaurantCart from "./RestaurantCart";
import resList from "../../utils/mockData";   
import { useState } from "react";


const Body = ()=>{ 

  const [ListOfRestaurants, setListOfRestaurants] = useState([resList])

  
  
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn"  
          onClick={()=>{
            ListOfRestaurants = ListOfRestaurants.filter(
              (res)=> res.data.avgRating > 4)
          }}
          >Top Rated Restaurants</button>
        </div>
          <div className="res-container">
          {ListOfRestaurants.map((restaurant)=> (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
          </div>
      </div>
    )
   }

export default Body;