import itemList from "./itemList";

const RestaurantCategory = ()=>{
    return(
        <div>
        <div className="w-6/12 mx-auto my-4 bg-green-50 shadow-lg p-4 ">
        <div className="flex justify-between"> 
            <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
            </span>
            <span >⬇️</span>

        </div>
        {}
        < ItemList items={data.itemCards} />
        </div>
        </div>
    )
}

export default RestaurantCategory;