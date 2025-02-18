import { Component } from "react"
import { Link } from "react-router-dom"
import { Oval } from "react-loader-spinner"
import Popup from "reactjs-popup"

import { FaCartShopping } from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa6"
import { FaFilter } from "react-icons/fa6"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { FaSearch } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import CasaMartContext from "../../context/CasaMartContext"

const apiStatus = {
  initial: "INITIAL",
  process: "PROCESS",
  success: "SUCCESS",
  failure: "FAILURE",
}

class KitchenItems extends Component {
  state = { kitchenItems: [], status: apiStatus.initial, search: "" }

  componentDidMount() {
    this.getKitchenItems()
  }
  getKitchenItems = async () => {
    this.setState({ status: apiStatus.process })
    const options = {
      method: "GET",
    }
    const response = await fetch(
      "https://casa-mart.onrender.com/kitchen-items",
      options
    )
    const data = await response.json()
    if (response.ok === true) {
      const responseData = data.data.map((each) => ({
        description: each.description,
        category: each.category,
        discountPrice: each.discount_price,
        features: each.features,
        images: each.images,
        name: each.name,
        price: each.price,
        id: each._id,
      }))
      this.setState({
        kitchenItems: responseData,
        status: apiStatus.success,
      })
    } else {
      this.setState({ status: apiStatus.failure })
    }
  }

  filterPrice = async (price) => {
    const { kitchenItems } = this.state
    if (price <= 10000) {
      await this.getKitchenItems()
      const filterHomeAppilencesData = kitchenItems.filter(
        (eachProduct) => eachProduct.price <= price
      )
      this.setState({ kitchenItems: filterHomeAppilencesData })
    } else if (price <= 30000) {
      await this.getKitchenItems()
      const filterHomeAppilencesData = kitchenItems.filter(
        (eachProduct) => eachProduct.price <= price
      )
      this.setState({ kitchenItems: filterHomeAppilencesData })
    } else if (price >= 30000) {
      await this.getKitchenItems()
      const filterHomeAppilencesData = kitchenItems.filter(
        (eachProduct) => eachProduct.price >= price
      )
      this.setState({ kitchenItems: filterHomeAppilencesData })
    }
  }

  renderSuccess = () => {
    const { kitchenItems } = this.state
    return (
      <CasaMartContext.Consumer>
        {(value) => {
          return (
            <div className="w-full">
              <ul className="flex justify-center items-center md:justify-start md:items-start md:p-3 flex-wrap">
                {kitchenItems.length > 0 ? (
                  kitchenItems.map((each) => (
                    <Link to={`/kitchenItems/${each.id}`}>
                      <li
                        key={each.id}
                        className="cursor-pointer shadow-2xl w-36 align-middle md:w-72 lg:w-96 p-2 h-44 md:h-auto md:p-5 rounded-xl m-1 md:m3 overflow-hidden text-ellipsis whitespace-nowrap"
                      >
                        <img
                          src={each.images[0]}
                          alt={each.name}
                          className="rounded-lg h-24 md:h-64 w-full"
                        />
                        <p className="text-sm md:text-2xl w-full overflow-hidden font-semibold">
                          {each.name}
                        </p>
                        <p>
                          <span className="line-through text-red-400 text-sm md:text-2xl">
                            {each.discountPrice}
                          </span>{" "}
                          <span className="text-green-900 font-semibold text-sm md:text-2xl">
                            {each.price}
                          </span>{" "}
                        </p>
                      </li>
                    </Link>
                  ))
                ) : (
                  <div className="flex justify-center items-center h-screen w-full">
                    <div>
                      <img
                        src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887"
                        alt="No Data Found"
                      />
                    </div>
                  </div>
                )}
              </ul>
            </div>
          )
        }}
      </CasaMartContext.Consumer>
    )
  }

  renderLoader = () => (
    <div className="flex justify-center items-center w-screen h-screen">
      <Oval type="ColorRing" height={100} width={100} color="#000000" />
    </div>
  )

  renderFailure = () => (
    <div className="w-screen h-screen flex justify-center items-center">
      <img
        src="https://img.freepik.com/free-vector/creative-404-error-design_23-2147735309.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
        alt="Opps Something went Wrong"
      />
    </div>
  )

  searching = (event) => {
    this.setState({ search: event.target.value })
  }

  renderComponents = () => {
    const { status } = this.state
    switch (status) {
      case apiStatus.process:
        return this.renderLoader()
      case apiStatus.success:
        return this.renderSuccess()
      case apiStatus.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  searchBasedFilter = () => {
    const { kitchenItems, search } = this.state

    if (search.length === 0) {
      this.getKitchenItems()
    } else {
      const searchFilter = kitchenItems.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      this.setState({ kitchenItems: searchFilter })
    }
  }

  render() {
    const { search } = this.state
    return (
      <CasaMartContext.Consumer>
        {(value) => {
          const { cartList } = value
          return (
            <div>
              <div className="bg-green-400 h-24 md:h-28 flex justify-between items-center">
                <Link to="/kitchen">
                  <button type="button" className="text-white text-3xl ml-6">
                    <FaArrowLeft className="text-3xl" />
                  </button>
                </Link>
                <div className="flex justify-between items-center  bg-white h-2/5 md:h-2/4 md:w-2/3 rounded md:rounded-xl pl-3 outline-none border-none md:text-xl">
                  <div className="w-4/5">
                    <input
                      type="search"
                      className="bg-white h-2/5 md:h-2/4 md:w-full rounded md:rounded-xl pl-3 outline-none border-none md:text-xl"
                      placeholder="Search..."
                      onChange={this.searching}
                      value={search}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          this.searchBasedFilter()
                        }
                      }}
                    />
                  </div>
                  <div
                    onClick={this.searchBasedFilter}
                    className="w-1/5 bg-green-700 text-white h-full flex justify-center items-center md:rounded-xl rounded cursor-pointer"
                  >
                    <button
                      type="button"
                      className="bg-green-700 text-white text-2xl "
                    >
                      <FaSearch />
                    </button>
                  </div>
                </div>

                <div className="cursor-pointer flex mr-6">
                  <Link to="/cart">
                    <FaCartShopping className="text-3xl " />
                  </Link>
                  {cartList.length > 0 && (
                    <p className="-mt-3 text-red-500 font-bold">
                      {cartList.length}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-screen flex flex-col md:flex md:flex-row">
                <div className="w-1/5 border-t-0 border-l-0 border-2 hidden md:block ">
                  <div className="flex justify-between items-center pl-3 pr-3 p-3 bg-slate-400 text-white">
                    <span className="font-semibold">Filtes</span>
                    <FaFilter />
                  </div>
                  <div className="cursor-pointer">
                    <div
                      className=" pl-3 pt-2 flex gap-1 items-center hover:font-extrabold"
                      onClick={() => this.filterPrice(10000)}
                    >
                      {" "}
                      <MdKeyboardDoubleArrowRight />{" "}
                      <span>Products below ₹10,000</span>
                    </div>
                    <div
                      className=" pl-3 pt-2 flex gap-1 items-center hover:font-extrabold"
                      onClick={() => this.filterPrice(30000)}
                    >
                      {" "}
                      <MdKeyboardDoubleArrowRight />{" "}
                      <span>₹10,000 to ₹30,000</span>
                    </div>
                    <div
                      className=" pl-3 pt-2 flex gap-1 items-center hover:font-extrabold font-extrabold"
                      onClick={() => this.filterPrice(30001)}
                    >
                      {" "}
                      <MdKeyboardDoubleArrowRight />{" "}
                      <span>₹30,000 and above</span>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="bg-red-300 outline-none border-none w-full p-2 text-white"
                        onClick={this.getKitchenItems}
                      >
                        Clear Filter
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:hidden w-full h-full flex justify-end items-center pr-4 gap-1 cursor-pointer">
                  <Popup
                    modal
                    trigger={
                      <div className="flex gap-1 items-center font-semibold">
                        <button type="button" className="">
                          filter
                        </button>
                        <FaFilter />
                      </div>
                    }
                  >
                    {(close) => (
                      <>
                        <div className="w-screen h-screen bg-white">
                          <div className="w-full flex justify-end items-center">
                            <button
                              onClick={() => close()}
                              className="text-3xl mt-3 mr-4"
                            >
                              <MdCancel />
                            </button>
                          </div>
                          <div>
                            <div className="cursor-pointer">
                              <div
                                className=" pl-3 pt-2 flex gap-1 items-center hover:font-extrabold"
                                onClick={() => {
                                  this.filterPrice(10000)
                                  close()
                                }}
                              >
                                {" "}
                                <MdKeyboardDoubleArrowRight />{" "}
                                <span>Products below ₹10,000</span>
                              </div>
                              <div
                                className=" pl-3 pt-2 flex gap-1 items-center hover:font-extrabold"
                                onClick={() => {
                                  this.filterPrice(30000)
                                  close()
                                }}
                              >
                                {" "}
                                <MdKeyboardDoubleArrowRight />{" "}
                                <span>₹10,000 to ₹30,000</span>
                              </div>
                              <div
                                className=" pl-3 pt-2 flex gap-1 items-center hover:font-extrabold font-extrabold"
                                onClick={() => {
                                  this.filterPrice(30001)
                                  close()
                                }}
                              >
                                {" "}
                                <MdKeyboardDoubleArrowRight />{" "}
                                <span>₹30,000 and above</span>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="bg-red-300 outline-none border-none w-full p-2 text-white"
                                  onClick={() => {
                                    this.getKitchenItems()
                                    close()
                                  }}
                                >
                                  Clear Filter
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </Popup>
                </div>
                {this.renderComponents()}
              </div>

              <footer className="bg-gray-800 text-white py-8 mt-3 w-full">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Casamart</h3>
                      <p className="text-gray-400">
                        Your one-stop solution for all home essentials.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Quick Links
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="/"
                            className="text-gray-400 hover:text-green-500"
                          >
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
                      &copy; {new Date().getFullYear()} Casamart. All rights
                      reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          )
        }}
      </CasaMartContext.Consumer>
    )
  }
}
export default KitchenItems
