import { Link } from "react-router-dom";
import Logo from "../../assets/headerLogo.svg";

export const Navbar = () => {
  return (
    <nav class="bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <div>
              <Link to="/" class="flex items-center py-5 px-2">
                <img src={Logo} alt="asana" />
              </Link>
            </div>

            {/* <!-- primary nav --> */}
            <div class="hidden md:flex items-center space-x-1">
              <Link to="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">
                Features
              </Link>
              <Link to="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">
                Pricing
              </Link>
            </div>
          </div>

          {/* <!-- secondary nav --> */}
          <div class="hidden md:flex items-center space-x-1">
            <Link to="" class="py-5 px-3">
              Login
            </Link>
            <Link
              href=""
              class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </Link>
          </div>

          {/* <!-- mobile button goes here --> */}
          <div class="md:hidden flex items-center">
            <button class="mobile-menu-button">
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      <div class="mobile-menu hidden md:hidden">
        <Link to="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </Link>
        <Link to="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </Link>
      </div>
    </nav>
  );
};
