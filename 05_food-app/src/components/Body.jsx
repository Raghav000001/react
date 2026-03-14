import React from 'react'
import RestroCard from './RestroCard'


const Body = () => {

  const resList = [
  {
    id: "1",
    name: "Burger King",
    cuisines: ["Burgers", "American", "Fast Food"],
    avgRating: 4.2,
    costForTwo: "₹200 for two",
    deliveryTime: 25,
    promoted: true,
    offer: "60% off up to ₹120",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "Pizza Hut",
    cuisines: ["Pizzas"],
    avgRating: 4.1,
    costForTwo: "₹350 for two",
    deliveryTime: 30,
    promoted: false,
    offer: "50% off up to ₹100",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "KFC",
    cuisines: ["Burgers", "Biryani", "American", "Snacks"],
    avgRating: 4.3,
    costForTwo: "₹400 for two",
    deliveryTime: 20,
    promoted: true,
    offer: "Free delivery on first order",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    name: "McDonald's",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.5,
    costForTwo: "₹300 for two",
    deliveryTime: 15,
    promoted: false,
    offer: "Buy 1 Get 1 Free",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    name: "Domino's Pizza",
    cuisines: ["Pizzas", "Pastas", "Sides"],
    avgRating: 4.0,
    costForTwo: "₹400 for two",
    deliveryTime: 35,
    promoted: true,
    offer: "2 Pizzas at ₹199 each",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    name: "Subway",
    cuisines: ["Healthy Food", "Salads", "Wraps", "Sandwiches"],
    avgRating: 4.2,
    costForTwo: "₹350 for two",
    deliveryTime: 28,
    promoted: false,
    offer: "40% off on Sub of the Day",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
  },
  {
    id: "7",
    name: "Biryani Blues",
    cuisines: ["Biryani", "North Indian", "Mughlai"],
    avgRating: 4.6,
    costForTwo: "₹500 for two",
    deliveryTime: 40,
    promoted: true,
    offer: "₹75 off above ₹299",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
  },
  {
    id: "8",
    name: "Theobroma",
    cuisines: ["Bakery", "Desserts", "Beverages"],
    avgRating: 4.7,
    costForTwo: "₹450 for two",
    deliveryTime: 22,
    promoted: false,
    offer: "Free brownie on orders above ₹500",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
  },
  {
    id: "9",
    name: "Haldiram's",
    cuisines: ["North Indian", "Sweets", "Snacks", "Beverages"],
    avgRating: 4.3,
    costForTwo: "₹300 for two",
    deliveryTime: 30,
    promoted: true,
    offer: "30% off on sweets",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
  },
  {
    id: "10",
    name: "Wow! Momo",
    cuisines: ["Tibetan", "Momos", "Chinese", "Snacks"],
    avgRating: 4.1,
    costForTwo: "₹250 for two",
    deliveryTime: 18,
    promoted: false,
    offer: "20% off on all momos",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop",
  },
  {
    id: "11",
    name: "Barbeque Nation",
    cuisines: ["BBQ", "North Indian", "Continental", "Desserts"],
    avgRating: 4.4,
    costForTwo: "₹1200 for two",
    deliveryTime: 45,
    promoted: true,
    offer: "Flat ₹200 off",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
  },
  {
    id: "12",
    name: "Faasos",
    cuisines: ["Wraps", "Rolls", "Biryani", "Fast Food"],
    avgRating: 3.9,
    costForTwo: "₹300 for two",
    deliveryTime: 22,
    promoted: false,
    offer: "₹50 off on orders above ₹200",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
  },
  {
    id: "13",
    name: "Social",
    cuisines: ["Continental", "Asian", "American", "Cocktails"],
    avgRating: 4.5,
    costForTwo: "₹800 for two",
    deliveryTime: 38,
    promoted: true,
    offer: "Happy Hours: 20% off on drinks",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
  },
  {
    id: "14",
    name: "Paradise Biryani",
    cuisines: ["Biryani", "North Indian", "Andhra"],
    avgRating: 4.6,
    costForTwo: "₹550 for two",
    deliveryTime: 35,
    promoted: false,
    offer: "Extra 10% off with HDFC",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=300&fit=crop",
  },
  {
    id: "15",
    name: "Baskin Robbins",
    cuisines: ["Ice Cream", "Desserts", "Beverages"],
    avgRating: 4.4,
    costForTwo: "₹250 for two",
    deliveryTime: 20,
    promoted: true,
    offer: "Buy 2 get 1 free scoops",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop",
  },
  {
    id: "16",
    name: "Chaayos",
    cuisines: ["Beverages", "Snacks", "Sandwiches"],
    avgRating: 4.3,
    costForTwo: "₹200 for two",
    deliveryTime: 15,
    promoted: false,
    offer: "Free cookie on orders above ₹150",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
  },
  {
    id: "17",
    name: "Box8",
    cuisines: ["North Indian", "Chinese", "Rolls", "Biryani"],
    avgRating: 4.0,
    costForTwo: "₹350 for two",
    deliveryTime: 30,
    promoted: true,
    offer: "₹100 off on orders above ₹400",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
  },
  {
    id: "18",
    name: "Punjab Grill",
    cuisines: ["North Indian", "Mughlai", "Tandoor"],
    avgRating: 4.5,
    costForTwo: "₹900 for two",
    deliveryTime: 42,
    promoted: false,
    offer: "15% off for new users",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
  },
  {
    id: "19",
    name: "Truffles",
    cuisines: ["Burgers", "Desserts", "Beverages", "American"],
    avgRating: 4.6,
    costForTwo: "₹600 for two",
    deliveryTime: 35,
    promoted: true,
    offer: "Mega meal combo at ₹499",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop",
  },
  {
    id: "20",
    name: "Saravana Bhavan",
    cuisines: ["South Indian", "Sweets", "North Indian"],
    avgRating: 4.4,
    costForTwo: "₹400 for two",
    deliveryTime: 30,
    promoted: false,
    offer: "Flat ₹50 off on weekend orders",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
  },
   ];



  return (
    <div className='body-container'>
        <div className='search'>
        </div>
        <div className='filter-btns'>
        </div>
        <div className='restro-container flex flex-wrap gap-2.5'>
          {/* key => to uniquely identify each card 
              note: key should be unique for each element and never use index value for key
          */}
          {
             resList.map((restro)=> <RestroCard key={restro.id} data={restro} />   )
             
          }
           
        </div>
    </div>
  )
}

export default Body