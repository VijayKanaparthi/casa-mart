import { Component } from "react"
import { PiArrowFatLinesRightFill } from "react-icons/pi"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { Link } from "react-scroll"
import { Link as RouterLink } from "react-router-dom"

import logo from "../Assests/logo.png"
import hero from "../Assests/hero.png"
import combo from "../Assests/Combo.png"
import whoWeAre from "../Assests/Who We Are.png"

class LandingPage extends Component {
  state = { menu_item: "Home" }
  render() {
    const { menu_item } = this.state
    return (
      <div className="w-screen h-screen box-border">
        {/*Navbar */}
        <div className="w-screen h-44 flex justify-between items-center">
          <div className="w-full lg:flex lg:justify-center lg:items-center lg:w-5/12 md:w-1/5 ">
            <img src={logo} alt="Casa Mart" className="w-40 h-3/4" />
          </div>
          <ul className=" w-full lg:w-1/2 hidden md:w-3/6  md:text-xs lg:text-sm md:flex md:justify-between md:items-center">
            <li
              onClick={() => {
                this.setState({ menu_item: "Home" })
              }}
              className={` ${
                menu_item === "Home"
                  ? "underline decoration-green-500 decoration-2"
                  : ""
              } hover:decoration-green-600 hover:decoration-2 hover:decoration-solid cursor-pointer hover:underline`}
            >
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li
              onClick={() => {
                this.setState({ menu_item: "Categories" })
              }}
              className={` ${
                menu_item === "Categories"
                  ? "underline decoration-green-500 decoration-2"
                  : ""
              } hover:decoration-solid hover:decoration-green-600 hover:underline hover:decoration-2 cursor-pointer `}
            >
              <Link to="categories" smooth={true} duration={500}>
                Categories
              </Link>
            </li>
            <li
              onClick={() => {
                this.setState({ menu_item: "Combo Offers" })
              }}
              className={` ${
                menu_item === "Combo Offers"
                  ? "underline decoration-green-500 decoration-2"
                  : ""
              } hover:decoration-solid cursor-pointer hover:decoration-green-600 hover:decoration-2 hover:underline`}
            >
              <Link to="ComboOffers" smooth={true} duration={500}>
                Combo Offers
              </Link>
            </li>
            <li
              onClick={() => {
                this.setState({ menu_item: "About Us" })
              }}
              className={` ${
                menu_item === "About Us"
                  ? "underline decoration-green-500 decoration-2"
                  : ""
              } hover:decoration-solid cursor-pointer hover:decoration-green-600 hover:decoration-2 hover:underline`}
            >
              <Link to="aboutUs" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li
              onClick={() => {
                this.setState({ menu_item: "Contact Us" })
              }}
              className={` ${
                menu_item === "Contact Us"
                  ? "underline decoration-green-500 decoration-2"
                  : ""
              } hover:decoration-solid cursor-pointer hover:decoration-green-600 hover:decoration-2 hover:underline`}
            >
              <Link to="contactUs" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="w-full lg:w-1/2 flex justify-center items-center gap-3 md:w-1/4   ">
            <RouterLink to="/signup" className="text-white no-underline">
              <button
                type="button"
                className="bg-green-600 text-white border-none outline-none cursor-pointer p-1 pl-4 pr-4 rounded shadow-sm shadow-green-500"
              >
                Sign Up
              </button>
            </RouterLink>

            <button
              type="button"
              className="shadow-sm shadow-green-700 rounded p-1 pl-4 pr-4"
            >
              Login
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div id="home">
          <div className="w-full flex justify-center ">
            <img src={hero} alt="" className="w-full lg:w-4/5" />
          </div>
          <div className="pl-2 md:pl-3 lg:pl-7 pr-5 mb-10">
            <button className="lg:ml-32 flex gap-2 justify-center items-center p-2 border-none md:text-2xl outline-none bg-green-600 text-white cursor-pointer rounded pl-3 pr-3 md:p-4 md:w-64 md:text-center">
              Shop Now
              <PiArrowFatLinesRightFill />
            </button>
          </div>
        </div>

        {/*Featured Section */}

        <div
          id="categories"
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="flex lg:w-10/12 w-full pl-2 pr-2 justify-between items-center">
            <h1 className="text-start text-lg font-bold md:text-3xl ">
              Explore Our Top Categories
            </h1>
            <button className="flex justify-center items-center md:gap-1 text-xs md:text-2xl cursor-pointer">
              View All Categories <MdKeyboardDoubleArrowRight />
            </button>
          </div>

          <ul className="  pl-2 pr-2 scrollbar-hide w-screen h-60 md:h-80 lg:h-96 lg:w-10/12 flex gap-2 overflow-scroll p-3">
            <li className=" shadow-2xl p-3 shadow-green-800 rounded-lg w-2/4 h-full">
              <img
                src="https://img.freepik.com/free-photo/view-modern-hot-air-fryer-with-cooked-food_23-2151737126.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt=""
                className="rounded-lg"
              />
              <h1 className="w-96 md:text-center font-semibold md:text-2xl lg:text-3xl">
                Home Appliances
              </h1>
            </li>
            <li className=" shadow-2xl p-3 shadow-green-800 rounded-lg w-2/4  h-full ">
              <img
                src="https://img.freepik.com/free-photo/calming-room-design-with-green-plants_23-2149155790.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt=""
                className="rounded-lg"
              />
              <h1 className=" md:text-center w-96 font-semibold md:text-2xl lg:text-3xl">
                Décor
              </h1>
            </li>
            <li className=" shadow-2xl p-3 shadow-green-800 rounded-lg w-2/4  h-full ">
              <img
                src="https://img.freepik.com/free-photo/disinfection-equipment-table_23-2148577795.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt=""
                className="rounded-lg"
              />
              <h1 className=" md:text-center w-96 font-semibold md:text-2xl lg:text-3xl">
                Cleaning Supplies
              </h1>
            </li>
            <li className="  shadow-2xl p-3 shadow-green-800 rounded-lg w-2/4   h-full ">
              <img
                src="https://img.freepik.com/free-photo/top-view-kitchen-utensils-arrangement_23-2149491472.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt=""
                className="rounded-lg"
              />
              <h1 className="md:text-center  w-96 font-semibold md:text-2xl lg:text-3xl">
                Kitchen Essentials
              </h1>
            </li>
            <li className=" shadow-2xl p-3 shadow-green-800 rounded-lg w-2/4  h-full ">
              <img
                src="https://img.freepik.com/free-photo/interior-living-room-design-scandinavian-style-warm-tone_53876-143148.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt=""
                className="rounded-lg"
              />
              <h1 className=" md:text-center w-96 font-semibold md:text-2xl lg:text-3xl">
                Furniture
              </h1>
            </li>
          </ul>
        </div>

        <div
          id="ComboOffers"
          className="w-full flex flex-col justify-center items-center mt-5"
        >
          <div className="w-full pl-2 pr-2  lg:w-10/12 flex justify-between items-center mb-5">
            <h1 className="text-lg font-bold md:text-3xl">Combo Offers</h1>
            <button className="flex justify-center items-center md:gap-1 text-xs md:text-2xl cursor-pointer">
              Shop Combos <MdKeyboardDoubleArrowRight />
            </button>
          </div>
          <img src={combo} alt="combo" className="w-full lg:w-10/12" />
        </div>

        {/*About US*/}
        <h1 className="font-semibold text-lg lg:text-3xl mt-4 mb-4 pl-2 lg:ml-28">
          About Us: Building Homes, Simplifying Lives
        </h1>
        <div id="aboutUs" className="w-full flex justify-center items-center">
          <div className="w-full lg:w-10/12 flex flex-col md:flex md:flex-row md:justify-between md:items-center md:shadow-sm md:shadow-green-400 m-1 md:border-t-green-700 rounded-md">
            <div className="md:w-2/4 h-full rounded">
              <img
                src={whoWeAre}
                alt="Who We Are"
                className="w-full h-full pl-2 rounded pr-2 md:h-96"
              />
            </div>
            <div className="md:w-2/4 h-full flex flex-col">
              <div className="shadow-lg shadow-green-800 p-4 mt-2 border-2 border-green-500 border-l-green-600 m-2 rounded-lg">
                <h1 className="text-lg font-extrabold">Our Vision</h1>
                <p>At CasaMart, our vision is simple:</p>
                <p>
                  To make setting up a home easy, affordable, and delightful.
                  <br />
                  We aim to bridge the gap between convenience and quality,
                  ensuring every family can create a space they’re proud to call
                  home.
                </p>
              </div>
              <div className="shadow-lg shadow-green-800 p-4 mt-2 border-2 border-green-500 border-l-green-600 m-2 rounded-lg">
                <h1 className="text-lg font-extrabold">Our Mission</h1>
                <p>
                  To provide a wide range of high-quality products for every
                  room in your home. To offer budget-friendly options, special
                  combos, and exclusive discounts that make shopping enjoyable
                  and economical. To promote eco-friendly and sustainable
                  solutions for mindful living.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose CasaMart? */}
        <h1 className="font-semibold text-lg lg:text-3xl mt-4 mb-4 pl-2 lg:ml-28">
          Why Choose CasaMart?
        </h1>
        <p className=" mt-4 mb-4 pl-2 lg:ml-28 lg:mr-28">
          At CasaMart, we understand that setting up a home can be overwhelming.
          That’s why we’ve designed our platform to make the process effortless,
          affordable, and enjoyable. Here’s why we’re the preferred choice for
          families looking to build their dream home
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="shadow-lg shadow-lime-600 w-10/12 p-5 ">
            <h1 className="font-semibold text-lg lg:text-3xl mt-4 mb-4 pl-2 lg:ml-28">
              Affordable Prices for Every Budget
            </h1>
            <p className="mt-4 mb-4 pl-2 lg:ml-28 lg:mr-28">
              Whether you’re on a tight budget or looking for premium options,
              CasaMart has products that cater to all price ranges. Enjoy
              exclusive combo offers, seasonal discounts, and special deals to
              save more on your purchases.
            </p>
          </div>
          <div className="shadow-lg shadow-lime-600 w-10/12 p-5 mb-10">
            <h1 className="font-semibold text-lg lg:text-3xl mt-4 mb-4 pl-2 lg:ml-28">
              A Wide Range of Home Essentials
            </h1>
            <p className="mt-4 mb-4 pl-2 lg:ml-28 lg:mr-28">
              We cover everything your home needs: kitchen utensils, cleaning
              supplies, appliances, furniture, decor, and more. Carefully
              curated collections ensure that you find the best options for
              every room in your home, all in one place.
            </p>
          </div>
        </div>

        {/*Footer*/}
        <footer
          id="contactUs"
          className="bg-black text-white md:h-60 flex flex-col md:justify-evenly"
        >
          <div className="w-full flex justify-center items-center">
            <div className="flex gap-3 mt-3">
              <a href="https://www.linkedin.com/in/vijay-kanaparthi/">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.youtube.com/@SpiherVj">
                <FaYoutube size={30} />
              </a>
              <a href="">
                <FaFacebook size={30} />
              </a>
              <a href="">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly pl-8 md:pl-0 md:items-center">
            <div>
              <p>FAQ</p>
              <p>Invest Relations</p>
              <p>Privacy</p>
              <p>Speed Test</p>
            </div>
            <div>
              <p>Help Center</p>
              <p>Jobs</p>
              <p>Cookie Preference</p>
              <p>Legal Notice</p>
            </div>
            <div>
              <p>Account</p>
              <p>Ways to Watch</p>
              <p>Corporate information</p>
              <p>only Netflix</p>
            </div>
            <div>
              <p>Media</p>
              <p>Terms of Use</p>
              <p>Contact US</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default LandingPage
