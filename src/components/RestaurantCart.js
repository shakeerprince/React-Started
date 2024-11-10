const RestaurantCard = (props)=>{
    const {resData} = props;
  
    const {
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
  
    } = resData?.data
  
    return(
      <div className="res-card" style={{ background: "#f0f0f0"}}>
      <img 
      className="res-logo"
      alt="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG" + 
        cloudinaryImageId
      } 
       />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo / 100} Rs</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
   }


export default RestaurantCard;