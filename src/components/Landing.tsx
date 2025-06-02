import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h2>Welcome to the page!</h2>
      <div>Feel free to navigate the links above or below.</div>
      <ul className="mt-6 flex flex-col items-start space-y-2">
        <li>
          <Link
            to="/asgold8-portfolio/About"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/asgold8-portfolio/Projects"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
