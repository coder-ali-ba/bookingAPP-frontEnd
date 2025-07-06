import useFetch from "../../Hooks/useFetch"
import "./featuredProperties.css"

function FeaturedProperties() {

  const {data , loading , error } = useFetch("http://localhost:8800/api/hotels/?featured=true&min=100&max=300")
  
 
  


  return (
<div className="fp">
  {loading ? ("loading") : (
    <>
    {data.map((item)=>(
       <div className="fpItem" key={item._id}>
         <img
          src={item.photos[0]} alt="" className="fpImg"
         />
         <span className="fpName">{item.name} </span>
         <span className="fpCity">item.city</span>
         <span className="fpPrice"> Starting from ${item.cheepestPrice} </span>
         {item.rating &&
           <div className="fpRating">
             <button>{item.rating}</button>
             <span>Excellent</span>
           </div>
          }
       </div>
    ))
   }
    </>)
  }
</div>
  )
}

export default FeaturedProperties
