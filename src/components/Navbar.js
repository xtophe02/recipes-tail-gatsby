import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  const [open, setOpen] = React.useState(true)
  return (
    <nav className="bg-white ">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-around">
          <div>
            <Link to="/" className="flex items-center px-2 py-4">
              {/* <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2" /> */}
              <span className="text-lg font-semibold text-gray-500 md:text-2xl filter drop-shadow-xl">
                Simple<span className="text-indigo-500">Recipes</span>
              </span>
            </Link>
          </div>
          <div className="flex space-x-7">
            <div className="items-center hidden space-x-3 md:flex">
              <Link
                activeClassName="text-indigo-500 border-indigo-500 border-b-4 "
                to="/"
                className="px-2 py-4 font-semibold text-gray-500 hover:text-indigo-500"
              >
                Home
              </Link>
              <Link
                to="/recipes"
                activeClassName="text-indigo-500 border-indigo-500 border-b-4"
                className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-indigo-500"
              >
                Recipes
              </Link>
              <Link
                to="/about"
                activeClassName="text-indigo-500 border-indigo-500 border-b-4"
                className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-indigo-500"
              >
                About
              </Link>
              <Link
                to="/tags"
                activeClassName="text-indigo-500 border-indigo-500 border-b-4"
                className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-indigo-500"
              >
                Tags
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-center ">
            <Link
              to="/contact"
              className="px-2 py-2 font-medium text-white duration-300 bg-indigo-500 rounded hover:bg-indigo-400"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center md:hidden ">
            <button className="outline-none " onClick={() => setOpen(!open)}>
              {open ? (
                <svg
                  className="w-6 h-6 text-indigo-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${open && "hidden"}  shadow-md  `}>
        <Link
          to="/"
          className="block px-2 py-4 text-sm "
          activeClassName="text-white bg-indigo-500 font-semibold"
        >
          Home
        </Link>
        <hr />
        <Link
          to="/recipes"
          className="block px-2 py-4 text-sm"
          activeClassName="text-white bg-indigo-500 font-semibold "
        >
          Recipes
        </Link>
        <hr />
        <Link
          to="/about"
          className="block px-2 py-4 text-sm "
          activeClassName="text-white bg-indigo-500 font-semibold "
        >
          About
        </Link>
        <hr />
        <Link
          to="/tags"
          className="block px-2 py-4 text-sm "
          activeClassName="text-white bg-indigo-500 font-semibold "
        >
          Tags
        </Link>
        <hr />
        <Link
          to="/contact"
          className="block px-2 py-4 text-sm "
          activeClassName="text-white bg-indigo-500 font-semibold "
        >
          Contact Us
        </Link>
      </div>
    </nav>
  )
}
