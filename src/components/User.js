import { useState } from "react";

const User = ()=>{

    const [count ] = useState(0);
    const [count2 ] = useState(1)
    return(

        <div className="user-card">
        <h1>count = {count}</h1>     
        <h1>count = {count2}</h1>     
        <h2>Name : Shaker</h2>
        <h3>Location : Hyderabad</h3>
        <h3>Contact : hydrashaker@gmail.com</h3>
        </div>
    )

}

export default User;