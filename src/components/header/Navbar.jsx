import { Link } from "react-router-dom";
import Logo from "../../assets/headerLogo.svg";
import dropDownIcon from "../../assets/dropdown.svg";
import globeIcon from "../../assets/globe.svg";

export const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <img src={Logo} alt="asana" />
              </Link>
            </div>

            {/* <!-- primary nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/whyAsana"
                className="py-4 px-2 text-gray-500 hover:text-gray-900"
              >
                <span className="flex">
                  <span>Why Asana?</span>
                  <img className="pt-1 pl-1" src={dropDownIcon} alt="V" />
                </span>
              </Link>

              <Link
                to="/features"
                className="py-4 px-2 text-gray-500 hover:text-gray-900 dropdown"
              >
                <span className="flex">
                  <span>Features</span>
                  <img className="pt-1 pl-1" src={dropDownIcon} alt="V" />
                </span>
              </Link>

              <Link
                to="/resources"
                className="py-4 px-2 text-gray-500 hover:text-gray-900"
              >
                <span className="flex">
                  <span> Resources</span>
                  <img className="pt-1 pl-1" src={dropDownIcon} alt="V" />
                </span>
              </Link>

              <Link
                to="/enterprise"
                className="py-4 px-2 text-gray-500 hover:text-gray-900"
              >
                Enterprise
              </Link>

              <Link
                to="/pricing"
                className="py-4 px-2 text-gray-500 hover:text-gray-900"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* <!-- secondary nav --> */}
          <div className="hidden md:flex items-center font-sans space-x-4">
            <Link
              to="/g"
              className="py-1 px-3 text-gray-500 hover:text-gray-900  "
            >
              <img src={globeIcon} alt="0" />
            </Link>

            <div className="w-[1px] py-4 bg-gray-500"></div>

            <Link
              to="/login"
              className="py-1 px-3 text-gray-500 hover:text-gray-900  "
            >
              Contact Sales
            </Link>

            <Link
              to="/login"
              className="py-1 px-3 text-gray-500   hover:text-gray-900  font-sans"
            >
              Login
            </Link>
            <Link
              to="/getStarted"
              className="py-1.5 px-5 font-medium bg-neutral-900 hover:bg-Neutral-400 text-white hover:text-white rounded transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* <!-- mobile button goes here --> */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
