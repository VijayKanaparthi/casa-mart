import React from "react"

import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "../Navbar/Navbar"

import homeHero from "../Assests/HomeHero.jpg"
import { Link } from "react-router-dom"

class Home extends React.Component {
  componentDidMount() {
    const { state } = this.props.location
    if (state && state.successMessage) {
      toast.success(
        state.successMessage,
        { autoClose: 5000 },
        { position: "top-center" }
      )
    }
  }
  render() {
    return (
      <div className="w-full h-full flex flex-col box-border">
        <ToastContainer />
        <Navbar />
        <div className="h-96 md:h-2/4 flex flex-col bg-gradient-to-b from-green-600 to-green-100 ">
          <div className="h-2/4 md:h-3/4 w-full flex justify-center">
            <img
              src={homeHero}
              alt="Home Appliences Banner"
              className="bg-cover w-full h-full lg:max-h-96"
            />
          </div>
          <div className="h-2/4 md:h-1/4 flex justify-between gap-2 md:justify-evenly items-center ml-4 p-5 md:p-0">
            <div className="md:w-1/5">
              <button
                type="button"
                className="bg-white md:p-4 pl-1 pr-1 rounded font-semibold md:text-2xl"
              >
                Shop Now
              </button>
            </div>
            <div className="w-10/12 md:w-2/4 h-full md:h-4/5 overflow-scroll md:overflow-auto">
              <h1 className="font-bold text-sm md:text-3xl ml-2">
                Modern Appliances for Effortless Living
              </h1>
              <p className="text-zinc-700 md:font-semibold text-sm ml-1 lg:p-2 ">
                Discover our range of home appliances designed to make your
                daily life easier. From energy-efficient refrigerators to
                powerful washing machines, we bring you products that combine
                innovation, durability, and style – all at prices that suit your
                budget. At CasaMart, we understand that a home is only as
                efficient as the appliances in it. That's why we offer the
                latest in technology and design, ensuring you get top-notch
                performance and savings on your utility bills.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-3 text-center">
          Heating and Cooling Appliances
        </h1>
        <Link to="/HomeAppliances">
          <div className=" w-full  md:h-96 flex gap-5 overflow-scroll scrollbar-hide p-5 bg-blue-400">
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-vector/climate-control-poster-with-air-conditioning-technology-symbols-realistic-illustration_1284-29136.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Air Conditioners
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-vector/different-heaters-interior-realistic-illustration_1284-59763.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Room Heaters
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-vector/realistic-sunbed-illustration_23-2149456028.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Air Coolers
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/ceiling-fan-decoration-interior-room_74190-8490.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Ceiling Fans
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/close-up-air-fryer_23-2151723532.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Humidifiers
              </p>
            </div>
          </div>
        </Link>

        <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
          Entertainment Appliances
        </h1>
        <Link to="/HomeAppliances">
          <div className="group w-full md:h-96 flex gap-5 overflow-scroll scrollbar-hide p-5 bg-purple-400">
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/television-with-candles-room-generative-ai_188544-19471.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Smart TVs
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/3d-music-related-scene_23-2151125082.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Home Theater Systems
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/managing-smart-speakers-concept_23-2150170100.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Soundbars and Speakers
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/retro-vhs-packaging-indoors_23-2150172457.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Streaming Devices (e.g., Fire Stick, Chromecast)
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/gamification-3d-rendering-concept_23-2149484772.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Gaming Consoles
              </p>
            </div>
          </div>
        </Link>

        <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
          Energy and Utility Appliances
        </h1>
        <Link to="/HomeAppliances">
          <div className="w-full md:h-96 flex gap-5 overflow-scroll scrollbar-hide p-5 bg-orange-100">
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/classical-background-house-bath-interior_1203-5614.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Water Heaters (Geysers)
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/view-water-tank-storage_23-2151748233.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Solar Water Heaters
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/neon-robot-vacuum-cleaner_23-2151349248.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Smart Plugs and Power Strips
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/modern-photorealistic-lamp-design_23-2151038988.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Rechargeable Emergency Lights
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/water-filter-with-blue-cap-blue-background_185193-165389.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Water Filters and Purifiers{" "}
              </p>
            </div>
          </div>
        </Link>

        <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
          Laundry Appliances
        </h1>
        <Link to="/HomeAppliances">
          <div className="w-full md:h-96 flex gap-5 overflow-scroll scrollbar-hide p-5 bg-slate-200">
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/front-view-young-male-with-washer-dirty-clothes-white-wall_140725-107934.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Washing Machines
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/mock-up-packaging-cosmetic-amenities_105762-2331.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Laundry Accessories
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/shower-curtain_1385-1040.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Clothes Dryers
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/view-retro-clothing-iron-nutshell-tones_23-2151208156.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Steam Irons
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0">
              <img
                src="https://img.freepik.com/free-photo/carefree-homemaker-does-daily-chores_273609-50719.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Fabric Steamers
              </p>
            </div>
          </div>
        </Link>

        <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-2 text-center">
          Air Quality and Safety Appliances
        </h1>
        <Link to="/HomeAppliances">
          <div className="w-full md:h-96 flex gap-5 overflow-scroll scrollbar-hide p-5 bg-neutral-400">
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/smart-speaker-being-used-indoors_52683-107776.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Air Purifiers
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/home-automation-with-water-boiler-device_23-2148994135.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Voltage Stabilizers
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/close-up-hand-using-device_23-2148994205.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Home Security Systems (CCTV, Smart Doorbells)
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/house-automation-with-device-desk_23-2148994149.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Smart Thermostats and Air Quality Monitors
              </p>
            </div>
            <div className="w-60 md:w-80  bg-white rounded p-3 md:h-full shrink-0 ">
              <img
                src="https://img.freepik.com/free-photo/smoke-alarm-isolated-white_93675-132063.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                alt="Air Conditioner"
                className="h-48 md:h-5/6 w-full rounded"
              />
              <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                Smoke Detectors / Carbon Monoxide Detectors
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
}

export default Home
