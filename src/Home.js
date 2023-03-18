
import { useState } from "react";
import { data } from "./data"
import Buttons from "./Buttons";
import Cakes from "./Cakes";
import { Button } from "react-bootstrap";



function Home() {
    const [cakes, setCakes] = useState(data);
    const chosenCakes = (searchTerm) => {
      const newCakes = data.filter(element => element.searchTerm === searchTerm);
      setCakes(newCakes);
    }

    return (
      <div>
        <div className='box'>
          <img className="image" src="https://img.freepik.com/free-photo/delicious-cupcakes-with-copy-space_23-2148815876.jpg?size=626&ext=jpg&ga=GA1.2.130677348.1662326987&semt=sph" alt="cake" width="700px" height ="450px"/>
          <div className="centered">
            <h1>Welcome!</h1> 
            <h3>Here you will find a wide variety of cakes,</h3>
            <h3>cupcakes and more.</h3>
            <h3>Book a cake for your date.</h3>
             <a href="Booknow"><button className='btn'>Book now</button></a>
          </div>
        </div>
        < Buttons className= "btn" filteredChoice={chosenCakes} />
      < Cakes anyCakes={cakes} />
      </div>
      
    );
  }
  
  export default Home;