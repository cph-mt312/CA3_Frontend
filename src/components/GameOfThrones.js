import { useState } from "react";
import gameOfThronesFacade from "../facades/gameOfThronesFacade";

const pStyle = { color: "white" }

export default function GameOfThrones() {
    const [quote, setQuote] = useState({});
    const handleClick = (e) => {
        e.preventDefault();
        gameOfThronesFacade.getGameOfThronesQuote().then((data) => setQuote(data));
    };
    return (
        <div>
            <br /><br />
            <img
                src="https://media1.tenor.com/images/7d1708c21cb7e96bfa6b7259342fc56f/tenor.gif?itemid=9538835"
            />
            <br /><br />
            <button onClick={handleClick} className="btn btn-dark btn-lg"><i>Click me</i></button>
            <br /><br />
            <i><b><p style={pStyle}>"{quote.quote}"</p></b>
                <p style={pStyle}>- {quote.character}</p></i>
        </div>
    );
}
