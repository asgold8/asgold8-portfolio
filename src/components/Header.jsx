import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="ui large secondary inverted pointing menu">
          <Link to="/" className="item">Home</Link>
          <Link to="/About" className="item" >About</Link>
          <Link to="/Projects" className="item">Projects</Link>
      </div>
    );
  };

  export default Header;