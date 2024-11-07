import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", {id: "heading"}, "Shaker.dev");

// const jsxHeading = <h1 className="head">Shaker.dev</h1>

// console.log(jsxHeading);

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById(root));



 //React Components
 //class based component
 //functional component 



//  function functionalComponent(){
//   return (
//     <h1>functional component</h1>
//   )
//  }

const title = (
  <p>hello world</p>
)

const Title = ()=>(
 <h1 className="head" tabIndex="5">
  React using jsx</h1>
)

//component composition 
const HeadingComponent = ()=> (
  <div className="container">
    <h2>{100 + 200}</h2> 
    {title}
    <Title />
    <h1>React Functional Components</h1>
  </div>
)

const OuterComponent = ()=> {
  return
    <>
    
    <div>
      <h2>paragraph</h2>
    </div>
    
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)