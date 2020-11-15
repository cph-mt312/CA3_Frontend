import { useEffect, useState } from "react";
import { LOCAL_URL, REMOTE_URL } from "../utils/settings";

export let URL = "";

export default function Home() {
  const [currentURL, setCurrentURL] = useState(
    URL === LOCAL_URL ? "Local API" : URL === REMOTE_URL ? "Remote API" : "none"
  );

  useEffect(() => { }, [currentURL]);

  const changeURL = (e) => {
    URL = e.target.value;
    if (URL === LOCAL_URL) {
      setCurrentURL("Local API");
    } else {
      setCurrentURL("Remote API");
    }
  };

  return (
    <div>
      <br />
      <h1>Home</h1>
      <p>This is BornIT's SPA startcode - <i>Game of Thrones Edition</i></p>
      <img
        src="https://www.nicepng.com/png/full/55-554365_game-of-thrones-logo-transparent-for-kids-feast.png"
      />
      <br />
      <p style={{ fontWeight: "bold" }}>
        Select which API to use <br />
        Currently using: {currentURL}
      </p>
      <select onChange={changeURL}>
        <option value="">Choose...</option>
        <option value={LOCAL_URL}>Local API</option>
        <option value={REMOTE_URL}>Remote API</option>
      </select>
    </div>
  );
}
