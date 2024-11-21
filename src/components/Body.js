import RestaurantCart from "./RestaurantCart";  
import { useState, useEffect} from "react";
import React from "react";
import Shimmer from "./Shimmer";


const Body = ()=>{ 

  const [ListOfRestaurants, setListOfRestaurants] = useState([resList])

  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState([])

 useEffect(()=>{
  fetchData()
 }, [])

 const fetchData = async()=>{
  const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=17.37240&lng=78.43780')

  const json = await data.json()

  console.log(json);
  //optional Chaining 
  setListOfRestaurants(json?.data?.cards[2]?.card?.card)
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card)
  
  
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
          <div className="m-4 p-4">
            <input type="text" className="border border-solid border-black" value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
            />
              <button className="px-4 py-2 bg-green-100 "
              onClick={()=>{
                //Filter th Restaurant cards and update the UI
                //searchText
                  const filteredRestaurant = ListOfRestaurants.filter(
                   (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                    setSearchText(filteredRestaurant)
              }}
              >Search</button>
          </div>
          <div m-4 p-4 flex items-center> 
          <button  className="px-4 py-2 bg-gray-100"
          onClick={()=>{
            const filteredList = ListOfRestaurants.filter(
              (res)=> res.data.avgRating > 4)
              setListOfRestaurants(filteredList)
          }}
          >Top Rated Restaurants</button> </div>
        </div>
          <div className="flex flex-wrap rounded-lg ">
          {filteredRestaurant.map((restaurant)=> (
            <RestaurantCart key={restaurant.data.id} resData={restaurant} />
          ))}
          </div>
      </div>
    )
   }

export default Body; 