import React from "react";
import {CDN_URL} from '../../utils/constant'
const RestaurantCart = (props)=>{
    const {resData} = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
  
    } = resData?.data
  
    return(
      <div className="m-4 p-4 w-[250px]" style={{ background: "#f0f0f0"}}>
      <img 
      className="res-logo"
      alt="res-logo"
      src={ CDN_URL+cloudinaryImageId } 
       />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo / 100} Rs</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
   }

   //Higher Order Component 

   //input - Restaurant ==> restaurantCardPromoted
    export const withPromotedLabel = (RestaurantCart) =>{
    return (props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCart {...props} />
      </div>
    )
  }
   }

export default RestaurantCart;