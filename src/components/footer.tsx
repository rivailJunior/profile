import { FaFacebook, FaTwitter, FaYoutube, FaGit } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 w-full overflow-hidden"
          style={{ height: "80px" }}
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
              className="fill-current text-gray-300"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto flex flex-row justify-center">
          <div className="flex ">
            <div className="w-full">
              <h4 className="text-2xl font-semibold">{`Let's keep in touch!`}</h4>
              <h5 className="mt-0 mb-2 text-lg text-gray-700">
                Find me on any social profiles
              </h5>
              <div className="mt-6">
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-blue-200 p-3 font-normal text-white shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <FaTwitter />
                </button>
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-blue-400 p-3 font-normal text-white shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <FaFacebook />
                </button>
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-red-500 p-3 font-normal text-white shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <FaYoutube />
                </button>
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-gray-800 p-3 font-normal text-white shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <FaGit />
                </button>
              </div>
            </div>
            {/* <div className="w-full px-4 lg:w-6/12">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  <span className="mb-2 block text-sm font-semibold uppercase text-gray-600">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="https://www.creative-tim.com/presentation"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="https://blog.creative-tim.com"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="https://www.github.com/creativetimofficial"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="https://www.creative-tim.com/bootstrap-themes/free"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="mb-2 block text-sm font-semibold uppercase text-gray-600">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="https://creative-tim.com/terms"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="https://creative-tim.com/privacy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="https://creative-tim.com/contact-us"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
