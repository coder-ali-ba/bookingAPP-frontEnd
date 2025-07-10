import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

function Reserve(setOpen , hotelId) {
  return (
    <div className="reserve">
       <div className="rCOntainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose"
         onClick={()=>{setOpen(false)}}/>
       </div>
    </div>
  )
}

export default Reserve
