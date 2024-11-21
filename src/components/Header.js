import { useState } from "react";
import {LOGO_URL} from "../../utils/constant"
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = ()=>{

const [btnNameReact, setBtnNameReact] = useState("Login")

const onlineStatus = useOnlineStatus()
    return(
      <div className="flex justify-between">
        <div className="logo-container">
      <img className="w-56" src={LOGO_URL} />
        </div>
        <div className="flex "> 
        <ul className="flex p-4 shadow-lg mb-2">
          <li className="px-4  ">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4  ">Home</li>
          <li className="px-4  "><Link to="/about">About us</Link></li>
          <li className="px-4  "><Link to="/contactUS">Contact us</Link></li>
          <li className="px-4  "><Link to="/grocery">Grocery</Link></li>
          <li className="px-4  "><Link to="/about">Cart</Link></li>
          <button className="login" onClick={
            ()=>{
              setBtnNameReact("Logout")
            }}
            >{btnNameReact}
          </button>
        </ul>
        </div>
  
      </div>
    )
  
   }

   export default Header;