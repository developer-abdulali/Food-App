import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  {/* getting full data and year */}
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="flex items-end w-full bg-black/80">
      <footer className="w-full text-gray-700 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            {/* logo side */}
            <a
              href="/"
              className="flex items-center justify-center text-xl font-medium text-white title-font md:justify-start"
            >
              Pizza Hut
            </a>
            {/* logo side end */}
            <p className="mt-2 text-sm text-white">Explore, Taste, and Book</p>
            {/* social links div start */}
            <div className="mt-4">
              <span className="inline-flex justify-center gap-5 mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                {/* link for Facebook */}
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                >
                  <BsFacebook />
                </a>
                {/* link for Twitter */}
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                >
                  <BsTwitter />
                </a>
                {/* link for Instagram */}
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                >
                  <BsInstagram />
                </a>
              </span>
            </div>
             {/* social links div end */}
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            {/* Add content for each section (About, Support, Platform, Contact) */}
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                ABOUT
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Company
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Blog
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                SUPPORT
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Contact Support
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Help Resources
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Release Update
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                PLATFORM
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Terms & Privacy
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                CONTACT
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Send a Message
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    Request a Qoute
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer hover:text-primary hover:underline duration-200"
                  >
                    +92 333 1234567
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize text-center">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
