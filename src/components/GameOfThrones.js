import { useState } from "react";
import gameOfThronesFacade from "../facades/gameOfThronesFacade";

const pStyle = { color: "#4F1C0D" }

export default function GameOfThrones() {
    const [quote, setQuote] = useState({});
    const handleClick = (e) => {
        e.preventDefault();
        gameOfThronesFacade.getGameOfThronesQuote().then((data) => setQuote(data));
    };
    return (
        <div>
            <h1>Game of Thrones Quotes</h1>
            <br />
            <button onClick={handleClick} className="btn btn-dark"><i>Click me</i></button>
            <br /><br />
            <i><b><p style={pStyle}>"{quote.quote}"</p></b>
                <p style={pStyle}>- {quote.character}</p></i>
        </div>
    );
}
