import "./hotel.css"
import Navbar from "../../Components/Navbar/Navbar"
import Header from "../../Components/Header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"

import MailList from "../../Components/mailList/MailList"
import Footer from "../../Components/Footer/Footer"
import { useContext, useState } from "react"
import { tr } from "date-fns/locale"
import useFetch  from "../../Hooks/useFetch"
import { useLocation } from "react-router-dom"
import { SearchContext } from "../../Context/SearchContext"
// import { SearchContext } from "../../Context/SearchContext"

function Hotel() {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  
  const {data , loading , error ,reFetch  } = useFetch(`http://localhost:8800/api/hotels/find/${id}`) 
 
  const [slideNumber , setSlideNumber] =useState(0)
  const [open , setOpen] = useState(false)

  const {dates , options} = useContext(SearchContext)
 
  

  const MILLISECONDS_PER_DAY =1000 * 60 * 60 *24;
  function dayDifference(date1 , date2){
    const timeDiff =Math.abs(date2.getTime() - date1.getTime());
    const diffDays =Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays
  }

  const days =dayDifference(dates[0].endDate , dates[0].startDate);
  
// console.log(dates[0].endDate , dates[0].startDate);

  

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }



  const handleMove = (direction) => {
     let newSlideNumber;

     if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1
     }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1
     }

     setSlideNumber(newSlideNumber)
  }



  return (
    <div>
        <Navbar/>
        <Header type="list"/>
{loading ? ("loading") :
       ( <div className="hotelContainer">
          {open &&
             <div className="slider">
               <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
               <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
               <div className="sliderWrapper">
                <img src={data.photos[slideNumber]} className="sliderImg" alt="" />
               </div>
               <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
             </div>
          }
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or book now</button>

            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon  icon={faLocationDot}/>
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location {data.distance}fron center
            </span>
            <span className="hotelPriceHighLight">
              Book a stay over ${data.cheepestPrice} at this property and get a free taxi to airport
            </span>

            <div className="hotelImages">
              {
                data.photos?.map((photo , i)=>(
                  <div className="hotelImageWrapper" key={i}>
                    <img src={photo} onClick={()=>handleOpen(i)}  alt=""  className="hotelImage"/>
                  </div>
                ))
              }
            </div>

            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">
                 {data.desc}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>perfect for {days} days stay</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur unde, mollitia eaque itaque hic?
                </span>
                <h2><b>${days * data.cheepestPrice * options.room}</b> ({days} nights)</h2>
                <button>Reserve or Book now</button>
              </div>
            </div>

          </div>  

          
        </div>)}
      <MailList />  
      <Footer /> 
    </div>
  )
}

export default Hotel
