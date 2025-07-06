import FeaturedProperties from "../../Components/FeatuedProperties/FeaturedProperties"
import Featured from "../../Components/Featured/featured"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import MailList from "../../Components/mailList/MailList"
import Navbar from "../../Components/Navbar/Navbar"
import PropertyList from "../../Components/PropertyList/PropertyList"
import "./home.css"

function Home() {
  return (
    <div>
      <Navbar/>
      <Header />

      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests loves</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
