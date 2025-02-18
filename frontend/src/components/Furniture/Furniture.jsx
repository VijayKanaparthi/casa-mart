import React from "react"
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom"

const Furniture = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://img.freepik.com/free-photo/discount-armchair-podium_23-2150165449.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887"
        alt=""
        className="w-full bg-cover h-96"
      />
      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Dining Tables
      </h1>
      <Link to="/furnitureitems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-blue-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/table-set-dinning-table_1339-6412.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Extendable dining tables
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/table-setting-dinner_74190-2126.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              4-seater or 6-seater dining tables
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/romantic-table_1048-4534.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Round dining tables
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Dining Chairs
      </h1>
      <Link to="/furnitureitems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-fuchsia-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/table-setting-dinner_74190-2126.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Upholstered dining chairs
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/wall-old-historic-tables-romantic_1203-6338.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Wooden dining chairs
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/wooden-furniture-kitchen-interior-design_23-2148848662.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Wooden bar stools
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Office Desks
      </h1>
      <Link to="/furnitureitems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-red-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/working-from-home-ergonomic-workstation_23-2149132322.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Standing desks
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/art-stuff-near-blackboard_23-2147823771.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Compact writing desks
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/wooden-table-with-lamp-it_1340-37551.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              L-shaped desks
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Outdoor Benches
      </h1>
      <Link to="/furnitureitems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-violet-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/empty-chair-restaurant_1339-5439.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Wooden benches
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/close-up-metallic-seat_23-2151113122.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Metal park benches
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/blond-female-teenager-relaxing-round-black-artistic-chair_613910-10706.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Hanging egg chairs
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Outdoor Tables
      </h1>
      <Link to="/furnitureitems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-cyan-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/high-angle-table-arrangement-nature_23-2149434699.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Foldable picnic tables
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/life-style_1122-1815.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Round garden tables
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/hotel-lobby-interior_1127-3416.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Garden dining sets
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Shoe Racks
      </h1>
      <Link to="/furnitureitems">
        <div className="w-full md:h-96 flex md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-pink-100">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/view-shoe-rack-stacking-pair-footwear_23-2150991541.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Cabinet-style shoe racks
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176677.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Open-tier shoe organizers
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/coat-rack-decorated-with-christmas-motifs-jackets_1252-424.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Garden shoe racks
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

export default Furniture
