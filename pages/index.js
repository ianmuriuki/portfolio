/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ContactForm from "/components/ContactForm";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-700">
                HELLO ~  Welcome to my Portfolio
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-blueGray-500">
                I'm Iann, a passionate developer and cybersecurity enthuasist,
                dedicated to building secure, innovative solutions that make a
                real impact. -Yeah a tech lover who codes, hacks(ethically), and
                build cool stuff that solves real-world problems.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.linkedin.com/in/ian-muriuki-2387992b9"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  View my linkedin
                </a>
                <a
                  href="https://github.com/ianmuriuki"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="hero blob"
          width={500}
          height={300}
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            
              {/* Section Title */}
              <div className="text-center mb-6">
                <h2 className="text-4xl font-semibold text-blueGray-700">
                  About Me
                </h2>

              </div>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="Ian's workspace"
                  src="/img/about-me.jpeg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>

                  <h4 className="text-xl font-bold text-blueGray">
                    0xIann ~ Your Go-To Developer
                  </h4>
                  <p className="text-md font-light mt-2 text-blueGray">
                    I'm the kind of dev who loves clean APIs, secure systems,
                    and midnight debugging. Backend is my playground, servers
                    are my canvas, and I occasionally flirt with AI just to keep
                    things spicy.
                  </p>

                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                {/* Card 1 */}
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-robot"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Machine Learning & AI
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        I love exploring artificial intelligence and machine
                        learning to create intelligent systems, automate tasks,
                        and solve real-world problems.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-server"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Backend Development
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        I craft robust backend APIs and systems using
                        technologies like Node.js, PHP, and Rust for scalable
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-network-wired"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Web3 & Blockchain
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        I explore decentralized solutions on platforms like ICP
                        and Ethereum, building future-ready apps and smart
                        contracts.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-users"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Community Leadership
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        As a Google Developer Club lead and IEEE member, I
                        mentor and collaborate to grow the next generation of
                        tech leaders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            {/* Education Section */}
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-graduation-cap text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Education</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  I'm currently pursuing a degree in Information Technology at
                  Technical University of Mombasa, where I'm actively involved
                  in tech communities and leadership roles that complement my
                  academic journey.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-book"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          BSc in Information Technology
                        </h4>
                        <p className="text-blueGray-400 text-sm">
                          Technical Univeristy of Mombasa, 2023- To date
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Section */}
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="Experience Illustration"
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/education.jpg"
              />
            </div>
          </div>

          <div className="items-center flex flex-wrap pt-32">
            {/* Professional Experience */}
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-briefcase text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Experience & Leadership
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  While I’m still growing professionally, I’ve held various
                  impactful roles in student leadership and tech communities,
                  and I’ve recently completed a practical attachment at
                  Swahilipot Hub.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-code"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Webmaster - IEEE Student Branch
                        </h4>
                        <p className="text-blueGray-400 text-sm">
                          Technical University of Mombasa, 2024–Present
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-users-cog"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Software Lead - GDG TUM
                        </h4>
                        <p className="text-blueGray-400 text-sm">
                          Google Developer Group, 2024–Present
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-network-wired"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Tech Lead - TUM Developers Club
                        </h4>
                        <p className="text-blueGray-400 text-sm">
                          Technical University of Mombasa, 2023–Present
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-briefcase"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Attachment - Swahilipot Hub
                        </h4>
                        <p className="text-blueGray-400 text-sm">
                          Mombasa, Jan – Apr 2025
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Illustration */}
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="Experience Illustration"
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/experience.jpg"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                {/* Python */}
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.python.org/doc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="Python"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Python
                      </p>
                    </div>
                  </a>

                  {/* TypeScript */}
                  <a
                    href="https://www.typescriptlang.org/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-orange-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="TypeScript"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        TypeScript
                      </p>
                    </div>
                  </a>
                </div>

                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  {/* Rust */}
                  <a
                    href="https://doc.rust-lang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="Rust"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://www.rust-lang.org/static/images/rust-logo-blk.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Rust
                      </p>
                    </div>
                  </a>

                  {/* JavaScript */}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="JavaScript"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                My Tech Stack
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                These are the core technologies I use to build full-stack,
                secure, and performant applications. I’m constantly learning and
                expanding my toolkit.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-2 mt-2">
                  HTML
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-2 mt-2">
                  CSS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-2 mt-2">
                  React
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-2 mt-2">
                  Next.js
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-2 mt-2">
                  Node.js
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-2 mt-2">
                  TailwindCSS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-2 mt-2">
                  MongoDB
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-2 mt-2">
                  MySQL
                </span>
              </div>
              <a
                href="https://github.com/ianmuriuki"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">My Featured Projects</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              A showcase of some of my best work — blending backend systems,
              cybersecurity, and modern UI/UX. Dive into what I’ve been
              building.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-800">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 -mt-24">
              <div className="flex flex-wrap">
                {/* Project 1 */}
                <div className="w-full lg:w-4/12 px-4 mb-10">
                  <h5 className="text-xl font-semibold pb-4 text-center text-gray-200">
                    ICP Smart Contract
                  </h5>
                  <a
                    href="https://github.com/ianmuriuki/crop_yield_system"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="hover:-mt-2 relative flex flex-col min-w-0 break-words bg-gray-900 w-full shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Login Project"
                        className="align-middle border-none max-w-full h-64 object-cover rounded-lg"
                        src="/img/web3.jpg"
                      />
                    </div>
                  </a>
                  <p className="text-center text-white text-sm mt-4">
                    A decentralized platform designed to help farmers increase
                    their crop yield by providing insights, monitoring tools,
                    and educational resources.
                  </p>
                </div>

                {/* Project 2 */}
                <div className="w-full lg:w-4/12 px-4 mb-10">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                    Dev Portfolio Profile
                  </h5>
                  <a
                    href="https://github.com/ianmuriuki/portfolio.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="hover:-mt-2 relative flex flex-col min-w-0 break-words bg-gray-900 w-full shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Profile Project"
                        className="align-middle border-none max-w-full h-64 object-cover rounded-lg"
                        src="/img/portfolio.jpg"
                      />
                    </div>
                  </a>
                  <p className="text-center text-white text-sm mt-4">
                    A responsive developer profile built with React and
                    TailwindCSS to showcase your dev journey.
                  </p>
                </div>

                {/* Project 3 */}
                <div className="w-full lg:w-4/12 px-4 mb-10">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                    Decentralized AI Assistant
                  </h5>
                  <a
                    href="https://github.com/ianmuriuki/personal-DeAi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="hover:-mt-2 relative flex flex-col min-w-0 break-words bg-gray-900 w-full shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Landing Project"
                        className="align-middle border-none max-w-full h-64 object-cover rounded-lg"
                        src="/img/deaii.jpg"
                      />
                    </div>
                  </a>
                  <p className="text-center text-white text-sm mt-4">
                    A decentralized AI assistant that leverages blockchain
                    technology to provide secure and private interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-800 overflow-hidden">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Let’s Build Together
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Looking for passionate minds to collaborate on open source,
                Web3, or startup ideas. Drop a message and let's make something
                impactful together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
