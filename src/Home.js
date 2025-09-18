
import { useState } from "react";
import { data } from "./data"
import Buttons from "./Buttons";
import Cakes from "./Cakes";
import imagecup from "./home-page.jpg";
import { Link } from "react-router-dom";

function Home() {
    const [cakes, setCakes] = useState(data);
    const chosenCakes = (searchTerm) => {
      const newCakes = data.filter(element => element.searchTerm === searchTerm);
      setCakes(newCakes);
    }
    return (
      <div className="parent">
        <div className='box'>
          <img className="image" src={imagecup} alt="cake" width="700px" height ="450px"/>
          <div className="centered">
            <h1>Welcome!</h1> 
            <h3>Here you will find a wide variety of cakes,</h3>
            <h3>cupcakes and more.</h3>
            <h3>Book a cake for your date.</h3>
             <Link to ="/Booknow"><button className='btn'>Book now</button></Link>
          </div>
        </div>
        < Buttons className= "btn" filteredChoice={chosenCakes} />
      < Cakes className="products" anyCakes={cakes} />
      </div>
      
    );
  }
  
  export default Home;
