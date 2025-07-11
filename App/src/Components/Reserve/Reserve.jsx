import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../Hooks/useFetch"
import { useContext, useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
import axios from "axios";


function Reserve({setOpen , hotelId}) {

  const {data , loading , error ,reFetch  } = useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`);

  // console.log("data" , data);
  const {dates} = useContext(SearchContext)
  const [selectedRooms , setSelectedRooms] = useState([])

  const getDatesInRange = (startDate , endDate) => {
    const start = new Date(startDate)
    const end =new Date(endDate)

    const date =new Date(start.getTime())
    
    let list = []

    while(date <= end){
       list.push(new Date(date).getTime())
       date.setDate(date.getDate() + 1)
    }

    return list
  }

  const allDates =getDatesInRange(dates[0].startDate , dates[0].endDate);
  
  const isAvailable = (roomNumber) =>{
      const isFound = roomNumber.unavailableDates.some((date)=>{
        allDates.includes(new Date(date).getTime())
      })
      return !isFound
  }

  const handleSelect = (e) => {
      const checked = e.target.checked;
      const value = e.target.value
      setSelectedRooms(checked ? [...selectedRooms , value] : selectedRooms.filter(item=>{
        item !== value
      }))
  }

  const handleClick = async() => {
     try {
      await Promise.all(selectedRooms.map(roomId=>{
        const res = axios.put("")
      }))
      
     } catch (error) {
      
     }

  }
  
  
  return (
    <div className="reserve">

       <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose"
         onClick={()=>setOpen(false)}/>
       

       <span>Select your room :</span>

       {data.map(item=>(

        <div className="rItem">
          <div className="rItemInfo">
            <div className="rTitle">{item.title}</div>
            <div className="rDesc">{item.desc}</div>
            <div className="rMax">maxPeople : <b>{item.maxPeople}</b></div>
            <div className="rPrice"> : <b>{item.price}</b></div>
          </div>

          <div className="rSelectRooms">

             {item.roomNumbers.map(roomNumber=>(
                  <div className="room" key={roomNumber._id}>
                     <label>{roomNumber.number}</label>
                     <input type="checkbox" disabled={!isAvailable(roomNumber)} value={roomNumber._id} onChange={handleSelect}/>
                  </div>
                ))
             }
          </div>
        </div>

       ))

       }
       <button className="rButton" onClick={handleClick}>Reserve Now</button>
       </div>
       
    </div>
  )
}

export default Reserve
