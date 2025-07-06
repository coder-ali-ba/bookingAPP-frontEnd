import { Link } from "react-router-dom"
import "./searchItem.css"

function SearchItem(props) {
   const {item} = props  
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />

      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with air conditioning</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp"> Free Cancellation</span>
        <span className="siCancelOpSubtitles">You can cancel Later , so lock in this great price today</span>
      </div>

      <div className="siDetails">
        {item.rating &&
        <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>
        }
        <div className="siDetailTexts">
            <span className="siPrice">$ {item.cheepestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotel/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
        </div>
      </div>


    </div>
  )
}

export default SearchItem
