import React from "react"
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom"

const Cleaning = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://img.freepik.com/free-vector/cleaning-service-template-design_23-2150882601.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
        alt=""
        className="w-full bg-cover h-96"
      />
      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Surface Cleaners
      </h1>
      <Link to="/cleaningItems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-blue-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-vector/blue-pink-green-spray-bottles-white_613284-20.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Multi-Surface Spray Cleaner
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-vector/wet-wipes-skin-care-packages-moistened-cosmetic-napkins-product-blue-with-water-drops_33099-1534.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Disinfectant Wipes
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/set-wooden-kitchen-utensils-top-view_114579-12524.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Furniture Polish
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Floor Cleaning Supplies
      </h1>
      <Link to="/cleaningItems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-fuchsia-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/colorful-composition-with-mop-glass-cleaner-flat-lay-cleaning-company-service-concept_169016-10497.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Microfiber Mop
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/colorful-composition-with-set-bright-cleaning-sponges-cleaning-agent-cleaning-service-concept-background_169016-10766.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Floor Cleaning Solution
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/elevated-view-red-dustpan-brush-pink-background_23-2147860486.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Broom and Dustpan Set
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Bathroom Cleaning Supplies
      </h1>
      <Link to="/cleaningItems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-red-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/composition-cleaning-objects_23-2148104529.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Tile and Grout Cleaner
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/composition-cleaning-objects_23-2148104535.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Toilet Bowl Cleaner
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/wooden-table-with-lamp-it_1340-37551.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Shower Squeegee
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Laundry Cleaning Supplies
      </h1>
      <Link to="/cleaningItems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-violet-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/flat-lay-colorful-clothes-pins-with-detergent_23-2148230594.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Detergent Powder or Liquid
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/close-up-woman-holding-bottle-blue-detergent_23-2148246485.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Fabric Softener
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/young-cleaning-woman-casual-clothes-holding-cleaning-brush-bottle-cleaning-supplies-looking-with-serious-face_141793-128967.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Stain Remover Spray
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Kitchen Cleaning Supplies
      </h1>
      <Link to="/cleaningItems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-cyan-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/dishes-eco-soap-cleaners_23-2148824660.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Dishwashing Liquid
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/yellow-green-red-sponges_1203-878.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Scrub Pads
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/woman-cleaning-pot-sink-with-brush_23-2148465033.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Sink Drain Cleaner
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Glass and Mirror Cleaners
      </h1>
      <Link to="/cleaningItems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-pink-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/view-shoe-rack-stacking-pair-footwear_23-2150991541.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Glass Cleaning Spray
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/top-view-squared-cloths-arrangement_23-2149345164.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Lint-Free Cleaning Cloth
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/back-view-woman-wiping-window_23-2148465079.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Glass Wipes
            </p>
          </div>
        </div>
      </Link>

      <footer className="bg-gray-800 text-white py-8 mt-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Casamart</h3>
              <p className="text-gray-400">
                Your one-stop solution for all home essentials.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-green-500">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/living-room"
                    className="text-gray-400 hover:text-green-500"
                  >
                    Living Room Decor
                  </a>
                </li>
                <li>
                  <a
                    href="/furniture"
                    className="text-gray-400 hover:text-green-500"
                  >
                    Furniture
                  </a>
                </li>
                <li>
                  <a
                    href="/kitchen"
                    className="text-gray-400 hover:text-green-500"
                  >
                    Kitchen Essentials
                  </a>
                </li>
                <li>
                  <a
                    href="/cleaning"
                    className="text-gray-400 hover:text-green-500"
                  >
                    Cleaning Supplies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@casamart.com"
                    className="text-gray-400 hover:text-green-500"
                  >
                    info@casamart.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-green-500"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-kanaparthi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500"
            >
              Twitter
            </a>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6">
            <p className="text-center text-gray-400">
              &copy; {new Date().getFullYear()} Casamart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Cleaning
