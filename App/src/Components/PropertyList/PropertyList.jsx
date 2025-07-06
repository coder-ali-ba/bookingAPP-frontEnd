import "./PropertyList.css"
import useFetch from "../../Hooks/useFetch";




function PropertyList() {
    const {data , loading , error } = useFetch("http://localhost:8800/api/hotels/countByType")

     const images =[
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577204584.jpg?k=1b0ddc4b53ee6d829c3a73595a8e5cba9e9cb677c935fb30e0be7a534fb92002&o=&hp=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEoeu0bMRSLz8-0cY8sSKoP6VxWajL9eqQw&s",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/471383545.jpg?k=9a056eca88ddc23f31355dc4d1a9a440fcc280bd9ab4261b3c3f6d07620911ad&o=&hp=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6C17W0PF5oC30KlNBSkDWDan7dwrCbpu5jw&s",
        "https://upgradedpoints.com/wp-content/uploads/2018/07/Woman-throwing-open-hotel-curtains.jpg"
     ]

  return (
    <div className="pList">

        {loading ? ("loading") :(
            <>
           { data &&
            images.map((img , i)=>(
             <div className="pListItem" key={i}>
                <img 
                  src={img} alt="" className="pListImg" 
                 />
               <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} , {data[i]?.type}</h2>
               </div>
             </div>
            ))
        }
           
           
          </>)
           }
        
    </div>
  )
}

export default PropertyList
