import { Button } from "react-bootstrap";

function Buttons({filteredChoice}) {
    return (<div className="boxbtn">
            <button className="btn" onClick={() => filteredChoice("chocolate")}>Chocolate</button>
            <button className="btn" onClick={() => filteredChoice("fruit")}>Fruit</button>
            <button className="btn" onClick={() => filteredChoice("cupcakes")}>Cupcakes</button>
            <button className="btn" onClick={() => filteredChoice("vanilla")}>Vanilla</button>
            <button className="btn" onClick={() => filteredChoice("weddingCake")}>Wedding Cake</button>
        </div>
    )
}

export default Buttons