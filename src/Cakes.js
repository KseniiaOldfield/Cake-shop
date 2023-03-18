import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Cakes({anyCakes}) {
    const [showText, setShowText] = useState(false)
    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
      }
    return (
        <div className="products">
{anyCakes.map((item => {
    const {id, name, searchTerm, description, price, image, showMore} = item;
    return <div className="cake-card item" key={id}>
        <img className="card" src={image} alt="cakes" width="350px" height="300px"/>
            <div className="cake-info">
                <h3>{name}</h3>
                <p>{showMore ? description : description.substring(0,50) + "...."}
                <button className="show" onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button>
                </p>
                <h4>£ {price}</h4>
            </div>
    </div>
}))}
    </div>
    )
}
export default Cakes