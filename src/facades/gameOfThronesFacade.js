import { URL } from "../base-components/Home";
import apiFacade, { handleHttpErrors } from "../base-facades/apiFacade";

const gameOfThronesFacade = () => {

    const getGameOfThronesQuote = () => {
        return fetch(URL + "/api/got", apiFacade.makeOptions("GET", true))
            .then(handleHttpErrors);
    };

    return { getGameOfThronesQuote };
};

const facade = gameOfThronesFacade();
export default facade;
