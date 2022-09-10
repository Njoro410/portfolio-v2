import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import svg from "../Assets/endless-constellation.svg";

const Home = () => {
  return (
    <FullpageSection>
      <div className="bg-transparent w-full h-screen fixed items-center">
        <img src={svg} alt="svg" className="absolute object-cover h-[100vh] w-full " />
        {/* <div className="absolut h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            viewBox="0 0 800 800"
          >
            <rect
              fill="#303332"
              width="800"
              height="800"
              class="svg-elem-1"
            ></rect>
            <g fill="none" stroke="#034439" stroke-width="2.4">
              <path
                d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
                class="svg-elem-2"
              ></path>
              <path
                d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"
                class="svg-elem-3"
              ></path>
              <path
                d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"
                class="svg-elem-4"
              ></path>
              <path
                d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382"
                class="svg-elem-5"
              ></path>
              <path
                d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269"
                class="svg-elem-6"
              ></path>
            </g>
            <g fill="#554E53">
              <circle cx="769" cy="229" r="10" class="svg-elem-7"></circle>
              <circle cx="539" cy="269" r="10" class="svg-elem-8"></circle>
              <circle cx="603" cy="493" r="10" class="svg-elem-9"></circle>
              <circle cx="731" cy="737" r="10" class="svg-elem-10"></circle>
              <circle cx="520" cy="660" r="10" class="svg-elem-11"></circle>
              <circle cx="309" cy="538" r="10" class="svg-elem-12"></circle>
              <circle cx="295" cy="764" r="10" class="svg-elem-13"></circle>
              <circle cx="40" cy="599" r="10" class="svg-elem-14"></circle>
              <circle cx="102" cy="382" r="10" class="svg-elem-15"></circle>
              <circle cx="127" cy="80" r="10" class="svg-elem-16"></circle>
              <circle cx="370" cy="105" r="10" class="svg-elem-17"></circle>
              <circle cx="578" cy="42" r="10" class="svg-elem-18"></circle>
              <circle cx="237" cy="261" r="10" class="svg-elem-19"></circle>
              <circle cx="390" cy="382" r="10" class="svg-elem-20"></circle>
            </g>
          </svg>
        </div> */}
        <div className="absolute grid grid-cols-6 ">
          <div className="hidden md:block col-span-1 w-14 ">
            <div className="flex flex-col items-center justify-center">
              <h1>h</h1>
            </div>
          </div>
          <div className="hidden md:block col-span-4">
            <h1 className=" text-8xl mt-[31rem] text-green-600">
              NICE TO SEE YOU HERE
            </h1>
          </div>
          <div className="hidden md:block col-span-1">
            <h1 className="animate-bounce fill-mode-backwards text-5xl ml-[10.5rem] mt-56 writing-mode-vertical text-green-600">
              SCROLL DOWN -----{">"}{" "}
            </h1>
          </div>
        </div>

        <div className="w-full h-full  flex justify-center items-center">
          <div className="mockup-window border  h-screen  md:h-screen w-screen px-6 py-6 bg-gradient-to-r from-slate-900/50 via-slate-800/50 to-slate-700/ rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90  border-gray-900/10">
            <header className="bg-transparent">
              <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="md:flex md:items-center md:gap-12">
                    <a className="block text-teal-400" href="/">
                      <span className="sr-only">Home</span>
                      {/* <svg
                    className="h-8"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                      fill="currentColor"
                    />
                  </svg> */}
                    </a>
                  </div>

                  <div className="hidden md:block">
                    <nav aria-labelledby="header-navigation">
                      <h2 className="sr-only" id="header-navigation">
                        Header navigation
                      </h2>

                      <ul className="flex items-center gap-6 text-sm">
                        <li>
                          <a
                            className="text-slate-100 text-xl transition hover:text-gray-900 hover:bg-gray-500 px-4 py-4 rounded-md"
                            href="/"
                          >
                            About
                          </a>
                        </li>

                        <li>
                          <a
                            className="text-slate-100 text-xl transition hover:text-gray-900 hover:bg-gray-500 px-4 py-4 rounded-md"
                            href="/"
                          >
                            Careers
                          </a>
                        </li>

                        <li>
                          <a
                            className="text-slate-100 text-xl transition hover:text-gray-900 hover:bg-gray-500 px-4 py-4 rounded-md"
                            href="/"
                          >
                            History
                          </a>
                        </li>

                        <li>
                          <a
                            className="text-slate-100 text-xl transition hover:text-gray-900 hover:bg-gray-500 px-4 py-4 rounded-md"
                            href="/"
                          >
                            Services
                          </a>
                        </li>

                        <li>
                          <a
                            className="text-slate-100 text-xl transition hover:text-gray-900 hover:bg-gray-500 px-4 py-4 rounded-md"
                            href="/"
                          >
                            Projects
                          </a>
                        </li>

                        <li>
                          <a
                            className="text-slate-100 text-xl transition hover:text-gray-900 hover:bg-gray-500 px-4 py-4 rounded-md"
                            href="/"
                          >
                            Blog
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="sm:gap-4 sm:flex">
                      <a
                        className="px-5 py-2.5 text-sm font-medium text-white transition bg-slate-700 rounded-md  hover:text-gray-900 hover:bg-gray-200 shadow-lg"
                        href="/"
                      >
                        Hire Me
                      </a>
                    </div>

                    <div className="hidden  md:hidden">
                      <button className="p-2 text-gray-600 transition bg-gray-100 text-xl rounded hover:text-gray-600/hover:text-slate-700/100 text-xl hover:bg-slate-600 px-4 py-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className=" justify-center">
              <div className="my-5 md:my-24 ml-32">
                <h1 className="text-3xl font-extrabold text-sky-100  animate-in  slide-in-from-bottom duration-1000">
                  Hello <span className="blog-title-emoji">👋</span>
                </h1>
                <h1 className="text-6xl text-sky-700 animate-in  slide-in-from-bottom duration-1000">
                  I'm{" "}
                  <span className="line bg-clip-text text-8xl text-slate-900 animate-in  slide-in-from-bottom duration-1000 underline underline-offset-1">
                    Brian Njoroge
                  </span>
                </h1>
                <p className="text-4xl text-sky-700 ml-12 animate-in  slide-in-from-bottom duration-1000">
                  a Full Stack Developer
                </p>
                <p className="text-sky-100 text-xl animate-in  slide-in-from-bottom duration-1000">
                  I make things for the web <br /> and I love it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullpageSection>
  );
};

export default Home;
