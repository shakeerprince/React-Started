import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Items
 *Body 
 * -search
 * -RestaurantContainer
 * -RestaurantCard
 * -img
 * -name of res, star rating, cuisine, delivery  time
 *Footer
 * -copyright
 * -Links
 * -Address
 * -Contact
 * Body
 * Footer
 */

 const Header = ()=>{
  return(
    <div className="header">
      <div className="logo-container">
    <img className="logo" src="https://tse2.mm.bing.net/th?id=OIP.9hl54qFeHA_2o_PIo3JhswAAAA&pid=Api&P=0&h=180" />
      </div>
      <div className="nav-items"> 
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
      </div>

    </div>
  )

 }



 const RestaurantCard = (props)=>{
  return(
    <div className="res-card" style={{ background: "#f0f0f0"}}>
    <img 
    className="res-logo"
    alt="res-logo"
    src="http://///////////////"
    />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
 }

 const Body = ()=>{
  return(
    <div className="body">
      <div className="search">
        <h2>Search</h2>
        <div className="res-container">
        <RestaurantCard resName ="Meghana Foods" cuisine="Biryani, North Indian Asian resRating"/>
        <RestaurantCard resName ="KFC" cuisine="Chicken, Fast Food"/>
       
        
        </div>
      </div>
    </div>
  )
 }

  
 
 const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
 }

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<AppLayout />)

