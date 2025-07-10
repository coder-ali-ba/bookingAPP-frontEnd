import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";
import Login from "./Pages/LoginPage/Login";



function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/hotels" element={<List />}></Route>
    <Route path="/hotel/:id" element={<Hotel />}></Route>
    <Route path="/login" element={<Login />}></Route>
  </Routes>

  )
}

export default App;
