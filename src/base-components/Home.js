import { useEffect, useState } from "react";
import { REMOTE_URL } from "../utils/settings";

export let URL = REMOTE_URL;

export default function Home() {

  return (
    <div>
      <br />
      <h1>Home</h1>
      <p>Welcome to BornIT's SPA startcode - <i>Game of Thrones Edition</i></p><br />
      <img
        src="https://www.nicepng.com/png/full/55-554365_game-of-thrones-logo-transparent-for-kids-feast.png"
      />
      <br />
    </div>
  );
}
