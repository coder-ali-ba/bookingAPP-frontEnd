import { useContext, useState } from "react"
import "./Login.css"
import { AuthContext } from "../../Context/AuthContex"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {
    const [credentials , setCredentials] = useState({
        username : undefined,
        password :undefined
    })
   const {user ,loading , error , dispatch } = useContext(AuthContext)

   const handleChange = (e) => {
    setCredentials(prev=>({...prev , [e.target.id] : e.target.value}))
   }

   const navigate = useNavigate()
   

   const handleClick = async e => {
      e.preventDefault()
      dispatch({type : "LOGIN_START"})

      try {
        const res = await axios.post(`http://localhost:8800/api/auth/login` , credentials)
        dispatch({type:"LOGIN_SUCCESS" , payload : res.data})
        navigate("/")
        
      } catch (err) {
        dispatch({type : "LOGIN_FAILURE" , payload : err.response.data})
      }
   }

  return (
       <div className="login">
        <div className="lContainer">
          <input type="text" id="username" placeholder="username" onChange={handleChange} className="lInput" />
          <input type="password" id="password" placeholder="password" onChange={handleChange} className="lInput" />
          <button disabled={loading} className="lButton" onClick={handleClick}>LogIn</button>

          {error && <span>{error.message}</span>}
        </div>     
    </div>
  )
}

export default Login
