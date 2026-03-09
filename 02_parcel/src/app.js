import React from "react"
import ReactDOM from "react-dom/client"

 const root = ReactDOM.createRoot(document.getElementById("root"))
 const heading = React.createElement("h1",{id:"heading",className:"123",xyz:"xyz"},"hello from react")


const nestedElement = React.createElement("div"
    ,{className:"parent"},
     React.createElement("div",{className:"child"},
     React.createElement("h1",{},"hello from nested component")
     ) 
)

root.render(nestedElement)


