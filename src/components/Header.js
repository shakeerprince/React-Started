import { useState } from "react";
import {LOGO_URL} from "../../utils/constant"
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = ()=>{

const [btnNameReact, setBtnNameReact] = useState("Login")

const onlineStatus = useOnlineStatus()
    return(
      <div className="header">
        <div className="logo-container">
      <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items"> 
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>Home</li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contactUS">Contact us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/about">Cart</Link></li>
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