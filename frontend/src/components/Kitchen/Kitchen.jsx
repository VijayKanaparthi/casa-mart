import React from "react"
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom"

const Kitchen = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://img.freepik.com/free-psd/catering-template-design_23-2151544291.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
        alt=""
        className="w-full bg-cover h-96"
      />
      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Cooking Tools
      </h1>
      <Link to="/kitchenItems">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-slate-200">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/top-view-collection-supplies-one-color_23-2149669199.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Silicone spatulas
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/utensil-cooking-wooden-desk_23-2148167575.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Wooden spatulas
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/utensils-composition-arrangement-top-view_23-2149491432.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Stainless Steel Whisks
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Cutting and Chopping Tools
      </h1>
      <Link to="/kitchenItems">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-slate-200">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/young-female-cook-wearing-chef-uniform-holding-knife-pepper-isolated-pink-wall-with-copy-space_141793-36687.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Chef’s Knife
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/top-view-vegetables-as-pepper-bunch-dill-tomato-cucumber-around-cutting-board-wooden-surface_141793-16462.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Wooden Cutting Board
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/front-view-young-female-cook-white-cook-suit-white-cap-holding-cleaning-orange-carrot-yellow_140725-18734.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Vegetable Peeler
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Mixing and Prep Tools
      </h1>
      <Link to="/kitchenItems">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-slate-200">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/cook-adding-sugar-bowl-with-strawberries_23-2148585379.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Stainless Steel Mixing Bowls
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/stacked-tableware_23-2148861765.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Colanders
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/pumpkin-seeds-blue-ground-with-metallic-blender-around_114579-13919.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Mortar and Pestle
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Measuring Tools
      </h1>
      <Link to="/kitchenItems">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-slate-200">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/perfect-set-pure-clean-healthy-water-transparent-glass-bottles-cups-presented-wooden_346278-565.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Glass Measuring Cups
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/top-view-assortment-with-different-seeds_23-2148427786.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Magnetic Measuring Spoons
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/close-up-hands-holding-pan_23-2148994137.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Digital Kitchen Scale
            </p>
          </div>
        </div>
      </Link>

      <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
        Serving Tools
      </h1>
      <Link to="/kitchenItems">
        <div className="w-full md:h-96 flex  md:justify-center  gap-5 overflow-scroll scrollbar-hide p-5 bg-slate-200">
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/close-up-sustainable-cutlery-alternatives_23-2149165744.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Slotted Serving Spoon
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/assortment-salad-ingredients-white-background_23-2148541904.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Salad Tongs
            </p>
          </div>
          <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
            <img
              src="https://img.freepik.com/free-photo/chef-white-uniform-prepare-pizzaa_1157-27030.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
              alt="Air Conditioner"
              className="h-48 md:h-5/6 w-full rounded"
            />
            <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
              Pizza Cutter
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

export default Kitchen
