import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"

const name = 'raghav'



// jsx
const jsx = (
   <div>
      <div>
         <h1 style={{color:"orange"}}> from the {name} </h1>
      </div>
   </div>
)


// component => which returns some piece of jsx
function Demo() {
  return (
     <div>
        <h1>hello {jsx} </h1>
     </div>
  )
}

const Demo2 = ()=> {
  return (
    <div>
       hello from arrow functional component
    </div>
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Demo2/>
    <Demo/>
  </StrictMode>
 
)
