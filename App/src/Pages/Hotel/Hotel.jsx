import "./hotel.css"
import Navbar from "../../Components/Navbar/Navbar"
import Header from "../../Components/Header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"

import MailList from "../../Components/mailList/MailList"
import Footer from "../../Components/Footer/Footer"
import { useState } from "react"
import { tr } from "date-fns/locale"

function Hotel() {
 
  const [slideNumber , setSlideNumber] =useState(0)
  const [open , setOpen] = useState(false)

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const photos = [
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/270x200/560861636.jpg?k=2565383c10d3b96ec4de403c2bfccef55bc4be2ce4c39fe6c6f83b236a70ce01&o="
    },
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/270x200/634251734.jpg?k=a03d8982c9f7ee4a486eca439fb674d3ca68d0ea3866c561927fd3de1cc78c78&o="
    },
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/474866206.webp?k=d62afc97fdb7fea1e57fefa9e085138f5d3915e17da299ee24a905b916d61bd2&o="
    },
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/270x200/541649573.jpg?k=9d74b240f39d1e4eb0da46a3130ad251101fe852202e2aeadb4de85cdaedc16a&o="
    },
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/270x200/541649573.jpg?k=9d74b240f39d1e4eb0da46a3130ad251101fe852202e2aeadb4de85cdaedc16a&o="
    }  ,
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/270x200/541649573.jpg?k=9d74b240f39d1e4eb0da46a3130ad251101fe852202e2aeadb4de85cdaedc16a&o="
    }    
  ]

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

        <div className="hotelContainer">
          {open &&
             <div className="slider">
               <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
               <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
               <div className="sliderWrapper">
                <img src={photos[slideNumber].src} className="sliderImg" alt="" />
               </div>
               <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
             </div>
          }
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or book now</button>

            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon  icon={faLocationDot}/>
              <span>Elton st 125 New York</span>
            </div>
            <span className="hotelDistance">
              Excellent location -500m fron center
            </span>
            <span className="hotelPriceHighLight">
              Book a stay over $114 at this property and get a free taxi to airport
            </span>

            <div className="hotelImages">
              {
                photos.map((photo , i)=>(
                  <div className="hotelImageWrapper">
                    <img src={photo.src} onClick={()=>handleOpen(i)}  alt=""  className="hotelImage"/>
                  </div>
                ))
              }
            </div>

            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">Stay in the heart of Karachi</h1>
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ad aspernatur dicta dignissimos necessitatibus consequuntur? Exercitationem unde fugit dolor praesentium error nemo hic, atque aliquam nesciunt non accusantium, earum animi similique laborum veritatis assumenda quasi provident amet nisi illo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta repellendus magnam exercitationem beatae nisi, ipsum ut fugit quaerat temporibus. Molestiae aut et est, ex quod odio! Unde, quis. Maxime fugiat illum ab impedit numquam veniam minima, pariatur distinctio ipsa at quia consectetur quo aliquid natus. Fugit debitis nam odit?
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>perfect for 9 days stay</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur unde, mollitia eaque itaque hic?
                </span>
                <h2><b>$945</b> (9 nights)</h2>
                <button>Reserve or Book now</button>
              </div>
            </div>

          </div>  

          
        </div>
      <MailList />  
      <Footer /> 
    </div>
  )
}

export default Hotel
