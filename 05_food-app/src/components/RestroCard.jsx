

// we will receive the props in the form of an object

const RestroCard = ({data}) => {
  console.log(data);
  
  // image,name,ratins,deliverytime,cuisines,city name

        const {name,avgRating,costForTwo,deliveryTime,image,cuisines}  = data


  return (
    <div className="card border w-2xs">
       <img src={image} alt="" />
       <h3> {name} </h3>
       <p> {avgRating} stars</p>
       <p> {deliveryTime} </p>
       <p> {costForTwo}</p>
       <p> {cuisines.join(", ")} </p>

    </div>
  )
}

export default RestroCard