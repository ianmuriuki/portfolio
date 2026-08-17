import React from "react";
import Link from "next/link";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow-sm border-b border-blueGray-100">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <span className="text-blueGray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase tracking-wide hover:text-blueGray-600 transition-colors duration-200 cursor-pointer">
                My Portfolio
              </span>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded-lg bg-transparent block lg:hidden outline-none focus:outline-none hover:bg-blueGray-100 transition-colors duration-200"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center"></li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-900 hover:-translate-y-0.5 text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-200"
                  href="https://www.linkedin.com/in/ian-muriuki-2387992b9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-blueGray-400 fab fa-linkedin text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">linkedin</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-900 hover:-translate-y-0.5 text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-200"
                  href="https://twitter.com/@inc_codes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Twitter</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-900 hover:-translate-y-0.5 text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-200"
                  href="https://github.com/ianmuriuki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-blueGray-400 fab fa-github text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}