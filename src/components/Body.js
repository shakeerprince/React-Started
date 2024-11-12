import RestaurantCart from "./RestaurantCart";  
import { useState, useEffect} from "react";


const Body = ()=>{ 

  const [ListOfRestaurants, setListOfRestaurants] = useState([])

 useEffect(()=>{
  fetchData()
 }, [])

 const fetchData = async()=>{
  const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=17.37240&lng=78.43780')

  const json = await data.json()

  console.log(json);
  //optional Chaining 
  setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  
 }

 //conditional rendering
//  if(ListOfRestaurants.length === 0){
//   return <Shimmer />
//  }

  
    return ListOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"  
          onClick={()=>{
            const filteredList = ListOfRestaurants.filter(
              (res)=> res.data.avgRating > 4)
              setListOfRestaurants(filteredList)
          }}
          >Top Rated Restaurants</button>
        </div>
          <div className="res-container">
          {ListOfRestaurants.map((restaurant)=> (
            <RestaurantCart key={restaurant.data.id} resData={restaurant} />
          ))}
          </div>
      </div>
    )
   }

export default Body; 