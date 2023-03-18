import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css'
import Booknow from "./Booknow";
import Footer from "./Footer";



function App() {
  return <div><Router>
    <nav className="top">
      <Link to="/" className="logo">Helen | ArtCeke</Link>
      <Link to="/" className="link">Shop</Link>
      <Link to="/about" className="link">About</Link>
      <Link to="/contact" className="link">Contact us</Link>
      <Link to="/booknow" className="link">Book now</Link>
    </nav>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/booknow" element={<Booknow/>} />
    </Routes>
  </Router>
  < Footer />
  </div>
}

export default App;

