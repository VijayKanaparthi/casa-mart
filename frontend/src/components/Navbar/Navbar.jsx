import { Component } from "react"

import logo from "../Assests/logo.png"
import Cookies from "js-cookie"
import { Link, withRouter } from "react-router-dom"
import { CgProfile } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaShoppingCart } from "react-icons/fa"
import { GiCancel } from "react-icons/gi"
import { FaBottleWater } from "react-icons/fa6"
import { FaHome } from "react-icons/fa"
import { FaKitchenSet } from "react-icons/fa6"
import { MdBedroomParent } from "react-icons/md"
import { MdChair } from "react-icons/md"

import Popup from "reactjs-popup"
import CasaMartContext from "../../context/CasaMartContext"

class Navbar extends Component {
  logout = () => {
    this.props.history.replace("/login")
    Cookies.remove("jwt_token")
  }
  render() {
    return (
      <CasaMartContext.Consumer>
        {(value) => {
          const { cartList, changeActiveTab, activeTab } = value

          const tab = (current_tab) => {
            changeActiveTab(current_tab)
          }
          console.log(activeTab)

          return (
            <div className="w-screen h-20 md:h-32 flex justify-between items-center  pl-2 pr-4 shadow-xl shadow-green-600 rounded-lg">
              <div className="h-full">
                <img src={logo} alt="Casa mart" className="h-full" />
              </div>
              <ul className="hidden  lg:flex lg:flex-row lg:text-lg  w-full justify-evenly">
                <Link
                  onClick={() => tab("Home-Appliences")}
                  to="/"
                  className={`hover:decoration-green-600 ${
                    activeTab === "Home-Appliences"
                      ? " text-green-700 font-semibold text-xl"
                      : ""
                  }  hover:decoration-4 hover:decoration-solid cursor-pointer hover:underline`}
                >
                  <li>Home Appliances</li>
                </Link>

                <li>
                  <Link
                    onClick={() => tab("Living-Room")}
                    to="/living-room"
                    className={`hover:decoration-green-600 ${
                      activeTab === "Living-Room"
                        ? " text-green-700 font-semibold text-xl"
                        : ""
                    }  hover:decoration-4 hover:decoration-solid cursor-pointer hover:underline`}
                  >
                    Living Room Decor
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => tab("Furniture")}
                    to="/furniture"
                    className={`hover:decoration-green-600 ${
                      activeTab === "Furniture"
                        ? " text-green-700 font-semibold text-xl"
                        : ""
                    }  hover:decoration-4 hover:decoration-solid cursor-pointer hover:underline`}
                  >
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => tab("Kitchen")}
                    to="/kitchen"
                    className={`hover:decoration-green-600 ${
                      activeTab === "Kitchen"
                        ? " text-green-700 font-semibold text-xl"
                        : ""
                    }  hover:decoration-4 hover:decoration-solid cursor-pointer hover:underline`}
                  >
                    Kitchen Essentials
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => tab("Cleaning")}
                    to="/cleaning"
                    className={`hover:decoration-green-600 ${
                      activeTab === "Cleaning"
                        ? " text-green-700 font-semibold text-xl"
                        : ""
                    }  hover:decoration-4 hover:decoration-solid cursor-pointer hover:underline`}
                  >
                    Cleaning Supplies
                  </Link>
                </li>
              </ul>
              <div className="flex justify-between items-center w-2/5 md:w-1/5 lg:w-1/6 ">
                <div className="">
                  <CgProfile className="text-green-600 text-2xl" />
                </div>
                <div className="flex">
                  <Link to="/cart">
                    <FaShoppingCart className="text-green-600 text-2xl" />
                  </Link>
                  {cartList.length > 0 ? (
                    <p className="-mt-3 text-red-500 font-bold">
                      {cartList.length}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="lg:hidden">
                  <Popup
                    modal
                    trigger={
                      <GiHamburgerMenu className="text-green-600 text-2xl" />
                    }
                  >
                    {(close) => (
                      <div className="h-screen w-screen flex flex-col bg-green-400 ">
                        <div className="w-full flex justify-end ">
                          <GiCancel
                            className="mr-6 mt-6 md:text-4xl text-2xl "
                            onClick={() => close()}
                          />
                        </div>
                        <div className="  h-5/6 flex flex-col justify-center items-center ">
                          <div
                            className={`${
                              activeTab === "Home-Appliences" ? "bg-white" : ""
                            } flex text-xl mb-4 shadow-sm shadow-white  hover:bg-white  w-10/12 justify-between items-center gap-4`}
                          >
                            <FaHome className="text-2xl" />
                            <div className=" w-10/12">
                              <Link
                                to="/"
                                className={`text-zinc-900 `}
                                onClick={() => tab("Home-Appliences")}
                              >
                                <p className="font-semibold">Home Appliances</p>
                              </Link>
                            </div>
                          </div>
                          <div
                            onClick={() => tab("Living-Room")}
                            className={`${
                              activeTab === "Living-Room" ? "bg-white" : ""
                            } flex text-xl mb-4 shadow-sm shadow-white  hover:bg-white  w-10/12 justify-between items-center gap-4`}
                          >
                            <MdBedroomParent className="text-2xl" />
                            <div className="w-10/12">
                              <Link to="/living-room">
                                <p className="font-semibold">
                                  Living Room Decor
                                </p>
                              </Link>
                            </div>
                          </div>
                          <div
                            onClick={() => tab("Furniture")}
                            className={`${
                              activeTab === "Furniture" ? "bg-white" : ""
                            } flex text-xl mb-4 shadow-sm shadow-white  hover:bg-white  w-10/12 justify-between items-center gap-4`}
                          >
                            <MdChair className="text-2xl" />
                            <div className="w-10/12">
                              <Link to="/furniture">
                                <p className="font-semibold">Furniture</p>
                              </Link>
                            </div>
                          </div>
                          <div
                            onClick={() => tab("Kitchen")}
                            className={`${
                              activeTab === "Kitchen" ? "bg-white" : ""
                            } flex text-xl mb-4 shadow-sm shadow-white  hover:bg-white  w-10/12 justify-between items-center gap-4`}
                          >
                            <FaKitchenSet className="text-2xl" />
                            <div className="w-10/12">
                              <Link to="/kitchen">
                                <p className="font-semibold">
                                  Kitchen Essentials
                                </p>
                              </Link>
                            </div>
                          </div>
                          <div
                            onClick={() => tab("Cleaning")}
                            className={`${
                              activeTab === "Cleaning" ? "bg-white" : ""
                            } flex text-xl mb-4 shadow-sm shadow-white  hover:bg-white  w-10/12 justify-between items-center gap-4`}
                          >
                            <FaBottleWater className="text-2xl" />
                            <div className="w-10/12">
                              <Link to="/cleaning">
                                <p className="font-semibold">
                                  Cleaning Supplies
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <button
                            type="button"
                            className="bg-red-600 text-white outline-none cursor-pointer shadow-lg w-10/12  text-lg p-2 rounded"
                            onClick={this.logout}
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
                <button
                  type="button"
                  className="p-2 bg-green-500 text-white outline-none cursor-pointer rounded hidden lg:block lg:font-semibold"
                  onClick={this.logout}
                >
                  Logout
                </button>
              </div>
            </div>
          )
        }}
      </CasaMartContext.Consumer>
    )
  }
}
export default withRouter(Navbar)
