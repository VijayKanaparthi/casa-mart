import React from "react"
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom"

const LivingRoom = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://img.freepik.com/free-vector/living-room-interior-design-realistic-vector-background-sofa-window-betroom_528282-230.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887"
        alt=""
        className="w-full bg-cover h-96"
      />
      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Sofa Sets
      </h1>
      <Link to="/livingroom">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-neutral-400">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/woman-taking-nap-couch_23-2148311747.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Recliners
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/digital-lavender-interior-design_23-2151561200.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Loveseats
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-psd/view-sofa-interior-design-decor_23-2151772737.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              L-shaped sofa
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Coffee Tables
      </h1>
      <Link to="/livingroom">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-yellow-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/pillow-sofa_74190-3590.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Wooden coffee tables
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/empty-chair-table-with-outdoor-deck_74190-1707.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Glass-top coffee tables
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/sofa-chair_74190-3822.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Nesting tables
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Lighting
      </h1>
      <Link to="/livingroom">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-indigo-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-vector/vector-house-interior-with-white-armchair-black-floor-lamp-red-book-violet-wall-front-view_1284-48469.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Floor lamps
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037457.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Table lamps
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/antique-restaurant-light-provides-serene-atmosphere_60438-3784.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Pendant lights
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Cushions and Throws
      </h1>
      <Link to="/livingroom">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-fuchsia-300">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/antique-restaurant-light-provides-serene-atmosphere_60438-3784.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Decorative cushions
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/cozy-winter-scene-with-knitted-wool-pattern_778687-2305.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Knitted throw blankets
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/view-textured-fur-fabric_23-2149600295.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Faux fur throws
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Storage Units
      </h1>
      <Link to="/livingroom">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-red-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/home-interior-design-arrangement_23-2148986615.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Faux fur throws
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/marble-wall-living-room-mock-up_43614-920.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              TV stands
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/home-garden-message-lightbox_23-2149150468.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Corner shelves
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Clocks
      </h1>
      <Link to="/livingroom">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-slate-200">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/futuristic-time-machine_23-2151599400.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Oversized wall clocks
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/small-clock-frame-table_23-2147992795.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Vintage clocks
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/house-automation-with-device-desk_23-2148994149.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Digital LED clocks
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

export default LivingRoom
