import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between rounded-lg bg-gradient-to-r from-gray-100 to-blue-500 p-6 shadow-lg">
      <div className="text-blue mr-6 flex flex-shrink-0 items-center">
        <Link to="/">
          <motion.span
            className="text-xl font-semibold tracking-tight"
            style={{
              textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
              WebkitTextFillColor: "transparent",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            My Awesome App
          </motion.span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="text-blue flex items-center rounded border border-white px-3 py-2 hover:border-blue-100 hover:text-blue-100"
          type="button"
          onClick={() => alert("You clicked the hamburger menu!")}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="text-blue mt-4 mr-4 block rounded-lg border border-white border-opacity-25 bg-transparent py-2 px-4 hover:border-opacity-50 hover:text-blue-100 lg:mt-0 lg:inline-block"
            style={{ backdropFilter: "blur(5px)" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-blue mt-4 mr-4 block rounded-lg border border-white border-opacity-25 bg-transparent py-2 px-4 hover:border-opacity-50 hover:text-blue-100 lg:mt-0 lg:inline-block"
            style={{ backdropFilter: "blur(5px)" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-blue mt-4 block rounded-lg border border-white border-opacity-25 bg-transparent py-2 px-4 hover:border-opacity-50 hover:text-blue-100 lg:mt-0 lg:inline-block"
            style={{ backdropFilter: "blur(5px)" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
