import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState ,useEffect} from "react";


function filterData(searchTxt,restaurants){
   const filterData= restaurants.filter((restaurant)=>
   restaurant.data.name.includes(searchTxt)
   );
   return filterData;
} 



const Body = () => {
  
  const [searchTxt, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  useEffect(()=>{
    //Api Call
    getRestaurants().then((res)=>{
        
    }).catch((err)=>{
    console.log(err);
    })
  },[])
  
  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);

    //optional chaining
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
}
  
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchTxt}
          className="search-input"
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
       
        <button className="search-btn" onClick={()=>{
            const data=filterData(searchTxt,restaurants);
            setRestaurants(data);
        }}>
           Search 
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
