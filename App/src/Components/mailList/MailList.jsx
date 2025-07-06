import "./mailList.css"

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time , save money</h1>
      <span className="mailDesc">sign up , we will send the best deals</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="your email"/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
