 import React from "https://esm.sh/react@19.0.0-beta-04b058868c-20240508/?dev"
 import ReactDOMClient from "https://esm.sh/react-dom@19.0.0-beta-04b058868c-20240508/client/?dev"


//  cdn link
// type module



// in react => everything is a component

 const root = ReactDOMClient.createRoot(document.getElementById("root"))
 const heading = React.createElement("h1",{id:"heading",class:"123",xyz:"xyz"},"hello from react")


const nestedElement = React.createElement("div"
    ,{class:"parent"},
     React.createElement("div",{class:"child"},
     React.createElement("h1",{},"hello from nested component")
     ) 
)

// jsx syntax

// const nestedObject = <div>
//          <div>
//             <h1>hello</h1>
//          </div>
//     </div>

 
//  createElement method => always returns a js object
//   console.log(heading);
  

// render method => js object ----- html like syntax
root.render(nestedElement)

