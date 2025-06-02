import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex space-x-6 bg-gray-900 text-white py-4 text-lg">
      <Link to="/" className="hover:text-blue-400">
        Home
      </Link>
      <Link to="/About" className="hover:text-blue-400">
        About
      </Link>
      <Link to="/Projects" className="hover:text-blue-400">
        Projects
      </Link>
    </div>
  );
};

export default Header;
