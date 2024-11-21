import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = ()=>{
const {resId} = useParams();

const resInfo = useRestaurantMenu(resId)
//     const[resInfo, setResInfo] = useState(null);       
    
//     useEffect(()=>{
//         fetchMenu()
//     },[])

//    /**
//     * -Custom Hooks
//     *  ->const resInfo = useRestaurantMenu()
//     * 
//     */
 

//     const fetchMenu = async ()=>{
//         const data = await fetch('  ')
//         const json = data.json();
//         console.log(json);
//         setResInfo(json.data)
//         }

        const {name, cuisines, costForTwoMessage } = 
            resInfo?.cards[0]?.card?.card?.info;

        if(resInfo === null) return <Shimmer />

        const {itemCards} = 
          resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

          const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c)=>
                c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            
          )


    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</p>
            {categories.map((category) => (
                <RestaurantCategory data={categories?.card?.card}/>
))}
         
        </div>
    )
}

export default RestaurantMenu;
