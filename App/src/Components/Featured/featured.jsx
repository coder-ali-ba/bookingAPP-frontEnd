import "./featured.css"
import useFetch from "../../Hooks/useFetch"

function Featured() {
     const {data , loading , error } = useFetch("http://localhost:8800/api/hotels/countByCity?cities=gilgit,khaplu,shigar")

  
  return (
    <div className="featured">
       {loading ? ("please Wait") : (<> <div className="featuredItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/bg_holidayhomes/8cd8cfbc91ca86a0fac09532b9f5da4eb4960c2e.jpg" alt="#"  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>gilgit</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
         <div className="featuredItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/bg_holidayhomes/8cd8cfbc91ca86a0fac09532b9f5da4eb4960c2e.jpg" alt="#"  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>khaplu</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
         <div className="featuredItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/bg_holidayhomes/8cd8cfbc91ca86a0fac09532b9f5da4eb4960c2e.jpg" alt="#"  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>shigar</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div></>)}
    </div>
  )
}

export default Featured
