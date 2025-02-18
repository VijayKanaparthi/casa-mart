import React from "react"
import Cookies from "js-cookie"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { Link, withRouter } from "react-router-dom"
import CasaMartContext from "../../context/CasaMartContext"

import { IoCloudDone } from "react-icons/io5"
import Popup from "reactjs-popup"

class Cart extends React.Component {
  logout = () => {
    this.props.history.replace("/login")
    Cookies.remove("jwt_token")
  }
  render() {
    return (
      <CasaMartContext.Consumer>
        {(value) => {
          const { cartList, removeItem, increaseItem, decreseItem } = value

          const remove = (id) => {
            removeItem(id)
          }

          const increse = (id) => {
            increaseItem(id)
          }

          const decrese = (id) => {
            decreseItem(id)
          }

          return (
            <div>
              {/* Navbar*/}
              <div className="bg-green-400 h-24 md:h-28 flex justify-between items-center">
                <Link to="/">
                  <button type="button" className="text-black text-3xl ml-6">
                    <FaArrowLeft className="text-3xl" />
                  </button>
                </Link>
                <div className="flex justify-center items-center w-44 bg-yellow-400 h-2/5 md:h-2/4 md:w-2/3 rounded md:rounded-xl  outline-none border-none md:text-xl">
                  <h1 className="font-semibold text-black text-lg md:text-2xl">
                    Shopping Cart
                  </h1>
                </div>

                <div className="cursor-pointer pr-5" onClick={this.logout}>
                  <button className="bg-red-700 outline-none border-none p-2 md:p-3 cursor-pointer rounded text-white">
                    Logout
                  </button>
                </div>
              </div>
              {/* Cart Table*/}
              {cartList.length > 0 ? (
                <div className="w-full overflow-x-auto">
                  <table className="border-2 border-gray-600 w-full mt-3 text-left">
                    <thead className="bg-yellow-400">
                      <tr>
                        <th className="border-2 border-gray-500 md:text-2xl px-4 py-2">
                          Product
                        </th>
                        <th className="border-2 border-gray-500 md:text-2xl px-4 py-2">
                          Price
                        </th>
                        <th className="border-2 border-gray-500 md:text-2xl px-4 py-2">
                          Quantity
                        </th>
                        <th className="border-2 border-gray-500 md:text-2xl px-4 py-2">
                          Total
                        </th>
                        <th className="border-2 border-gray-500 md:text-2xl px-4 py-2">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartList.map((item, index) => (
                        <tr
                          key={index}
                          className="border-2 border-gray-500 md:text-lg text-sm"
                        >
                          <td className="border-2 border-gray-500 px-4 py-2 whitespace-nowrap">
                            {item.name}
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2 whitespace-nowrap">
                            ₹{item.price}
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2 whitespace-nowrap">
                            <div className="flex justify-around items-center">
                              {item.Quantity}
                              <div className="flex gap-3 ml-2">
                                <button
                                  className="p-2 text-white bg-green-400 rounded cursor-pointer"
                                  onClick={() => increse(item.id)}
                                >
                                  +
                                </button>
                                <button
                                  className="p-2 text-white bg-red-500 rounded cursor-pointer"
                                  onClick={() => decrese(item.id)}
                                >
                                  -
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2 whitespace-nowrap">
                            ₹{item.price * item.Quantity}
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2 whitespace-nowrap">
                            <button
                              className="bg-red-500 text-white px-3 py-1 rounded"
                              onClick={() => remove(item.id)}
                            >
                              Remove
                            </button>
                            <Popup
                              modal
                              trigger={
                                <button className="bg-green-500 rounded text-white ml-2 px-3 py-1">
                                  Order Now!
                                </button>
                              }
                            >
                              {(close) => {
                                return (
                                  <div className="w-screen h-full flex justify-center items-center">
                                    <div className="bg-white w-full text-xl md:w-2/4 h-96 rounded  border-2 border-solid flex flex-col justify-center items-center">
                                      <div className="flex">
                                        <h1 className="flex items-center md:text-3xl">
                                          Your Order is conformed{" "}
                                          <span>
                                            <IoCloudDone
                                              color="green"
                                              className="text-3xl"
                                            />
                                          </span>
                                        </h1>
                                      </div>

                                      <botton
                                        onClick={() => close()}
                                        className="flex items-center bg-green-400 text-white  cursor-pointer px-3 py-3 mt-4 rounded md:text-2xl gap-2 text-xl"
                                      >
                                        Continue Shopping{" "}
                                        <span>
                                          <FaArrowRight />
                                        </span>
                                      </botton>
                                    </div>
                                  </div>
                                )
                              }}
                            </Popup>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex flex-col justify-center w-screen mt-8">
                    <div className="flex justify-center items-center mb-2">
                      <h2 className="md:text-3xl">
                        Total Amount: ₹
                        {cartList.reduce(
                          (total, item) => total + item.price * item.Quantity,
                          0
                        )}
                      </h2>
                    </div>
                    <div className="flex justify-center items-center">
                      <Popup
                        modal
                        trigger={
                          <button className="bg-orange-600 w-1/3 p-3 rounded-lg md:text-3xl  text-white">
                            Order Now
                          </button>
                        }
                      >
                        {(close) => {
                          return (
                            <div className="w-screen h-full flex justify-center items-center">
                              <div className="bg-white w-full text-xl md:w-2/4 h-96 rounded  border-2 border-solid flex flex-col justify-center items-center">
                                <div className="flex">
                                  <h1 className="flex items-center md:text-3xl">
                                    Your Order is conformed{" "}
                                    <span>
                                      <IoCloudDone
                                        color="green"
                                        className="text-3xl"
                                      />
                                    </span>
                                  </h1>
                                </div>
                                <botton
                                  onClick={() => close()}
                                  className="flex items-center bg-green-400 text-white  cursor-pointer px-3 py-3 mt-4 rounded md:text-2xl gap-2 text-xl"
                                >
                                  Continue Shopping{" "}
                                  <span>
                                    <FaArrowRight />
                                  </span>
                                </botton>
                              </div>
                            </div>
                          )
                        }}
                      </Popup>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-screen h-screen flex justify-center items-center">
                  <h1 className="text-3xl font-semibold">
                    Your Cart is Empty!
                  </h1>
                </div>
              )}
            </div>
          )
        }}
      </CasaMartContext.Consumer>
    )
  }
}

export default withRouter(Cart)
