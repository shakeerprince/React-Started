import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = ()=>{

    const[resInfo, setResInfo] = useState(null);       
    
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch('  ')
        const json = data.json();
        console.log(json);
        setResInfo(json.data)
        }

        const {name, cuisines, costForTwoMessage } = 
            resInfo?.cards[0]?.card?.card?.info;

        if(resInfo === null) return <Shimmer />

        const {itemCards} = 
          resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>

                {itemCards.map((item)=>{
                    <li>{item.card.info.name} - {" "}
                    {item.card.info.price/100 || item.card.info.card.defaultPrice}</li>
                })}
               
                
            </ul>
        </div>
    )
}

export default RestaurantMenu;
