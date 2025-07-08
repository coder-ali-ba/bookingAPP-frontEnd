import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendarDays, faCar, faL, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from "react-date-range"
import { useContext, useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
// import { SearchContext } from "../../Context/SearchContext";


function Header(props) {
  
  const {type} =props
  const [destination , setDestination] = useState("")

    const [openDate , setOpenDate] = useState(false)
    const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

    const [openOptions , setOpenOptions] = useState(false)
    const [options , setOptions] = useState({
      adult : 1,
      children : 0,
      room:1
    })

    const navigate = useNavigate()

    const handleOptions = (name , operation) =>{
      setOptions((prev)=>{
        return {
          ...prev,
          [name] : operation  === "i" ? options[name] +1 : options[name] -1
        }
      })
    }

    const {dispatch} = useContext(SearchContext)

    const handleSearch = () => {
       dispatch({type : "NEW_SEARCH", payload : {destination , dates , options}})
       navigate("/hotels" ,  {state:{destination , dates , options}})
    }
 

  return (
    <div className="header">
        <div className={type ==="list" ? "headerContainer listmMode" : "headerContainer"}>
          <div className="headerList">
                <div className="headerListItems active">
                    <FontAwesomeIcon icon= {faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon= {faPlane} />
                    <span>FLights</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon= {faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon= {faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon= {faTaxi} />
                    <span>Airport Taxi</span>
                </div>       
           </div>
          { type !== "list" &&
            <>
           <h1 className="headerTitle">A lifetime of discounts ? it's Genius</h1>
           <p className="headerDesc">Get rewarded for your travels unlock instant saving of 10% or more with a hotelbooking account</p>
           <button className="headerBtn">Sign In / Register</button>

           <div className="headerSearch">

             <div className="headerSearchItem">
                <FontAwesomeIcon icon= {faTaxi}  className="headerIcon"/>
                <input type="text" placeholder="Where are you going" className="headerSearchInput" 
                  onChange={(e)=>setDestination(e.target.value)}
                />
             </div>

             <div className="headerSearchItem">
                <FontAwesomeIcon icon= {faCalendarDays}  className="headerIcon"/>
                <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>
                    {`${format(dates[0].startDate , "MM/dd/yyyy")} ,to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && <DateRange
                   editableDateInputs={true}
                   onChange={item => setDates([item.selection])}
                   moveRangeOnFirstSelection={false}
                   ranges={dates}
                   className="date"
                   minDate={new Date()}
                />}
             </div>

             <div className="headerSearchItem">
                <FontAwesomeIcon icon= {faPerson}  className="headerIcon"/>
                <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>
                  {`${options.adult} adult . ${options.children} children . ${options.room} room `}
                </span>

               {openOptions && <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                       <button className="optionCounterButton" disabled={options.adult <= 1}  onClick={()=>handleOptions("adult" , "d")}>-</button>
                       <span className="optionCounterNumber">{options.adult}</span>
                       <button className="optionCounterButton" onClick={()=>handleOptions("adult" , "i")}>+</button>
                    </div>
                  </div>
                
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button className="optionCounterButton" disabled={options.children <= 0} onClick={()=>handleOptions("children" , "d")}>-</button>
                      <span className="optionCounterNumber">{options.children}</span>
                      <button className="optionCounterButton" onClick={()=>handleOptions("children" , "i")}>+</button>
                    </div>
                  </div>
                
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button className="optionCounterButton" disabled={options.room <= 1}  onClick={()=>handleOptions("room" , "d")}>-</button>
                      <span className="optionCounterNumber">{options.room}</span>
                      <button className="optionCounterButton" onClick={()=>handleOptions("room" , "i")}>+</button>
                    </div>
                  </div>
                </div>
                }
             </div>

              <div className="headerSearchItem">
                <div className="headerBtn" onClick={handleSearch}>Search</div>
             </div>
           

             </div>
           </>}

        </div>
    </div>
  )
}

export default Header
