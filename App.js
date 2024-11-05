
  
  
  const parent = React.createElement("div", {id:parent },
    React.createElement("div", {id: "child"},[
        React.createElement(h1, {}, "i'm h1"),
        React.createElement("h1", {}, "i'm h2")
        
    ])
  )
  
  console.log(parent);
  
  
  //const heading = React.createElement("h1", {id: "heading"}, "Hey From React")

   const root = ReactDOM.createRoot(document.getElementById("root"))

   root.render(parent)
