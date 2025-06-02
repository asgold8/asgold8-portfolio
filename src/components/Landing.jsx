import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h2>Welcome to the page!</h2>
      <div>Feel free to navigate the links above or below.</div>
      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
