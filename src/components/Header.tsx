import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex space-x-6 bg-gray-900 text-white py-4 text-lg">
      <Link to="/asgold8-portfolio" className="hover:text-blue-400">
        Home
      </Link>
      <Link to="/asgold8-portfolio/About" className="hover:text-blue-400">
        About
      </Link>
      <Link to="/asgold8-portfolio/Projects" className="hover:text-blue-400">
        Projects
      </Link>
    </div>
  );
};

export default Header;
