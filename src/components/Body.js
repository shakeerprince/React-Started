import RestaurantCard from "./RestaurantCart";
import resList from "../../utils/mockData";

const Body = ()=>{
  let ListOfRestaurants = [
    {
      type: "restaurant",
      data: {
        id: "744531",
        name: "KFC",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "3.8",
       
      
      },
    },
    {
      type: "restaurant",
      data: {
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "4.0",
       
      
      },
    },

  ]
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