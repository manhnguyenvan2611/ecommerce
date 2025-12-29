import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./css/styles.css";
import "./css/media.css";
import Home from "./views/home";
import Cart from "./views/cart";
import Signup from "./views/signup";
import Login from "./views/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
  )
}

export default App
