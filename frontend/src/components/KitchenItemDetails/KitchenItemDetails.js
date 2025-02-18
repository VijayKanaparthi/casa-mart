import { Component } from "react"
import { v4 as uuidv4 } from "uuid"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"

import { FaCartShopping } from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa6"
import CasaMartContext from "../../context/CasaMartContext"
import { ToastContainer } from "react-toastify"
import { CgPen, CgProfile } from "react-icons/cg"

let commentList = [
  {
    id: uuidv4,
    name: "Vijay",
    comment: "Excellent Product. Really Nice. You Can Buy",
  },
  {
    id: uuidv4,
    name: "Sam",
    comment:
      "I Bought This Yesterday. it Works Really Good. Packing Also Really Good.",
  },
]

class KitchenItemDetails extends Component {
  state = {
    details: {},
    images: [],
    relatedKitchenData: [],
    comments: [...commentList],
    commentStatus: false,
    commentUserName: "",
    userComment: "",
  }

  componentDidMount() {
    this.getDetails()
    this.getRealatedItems()
  }

  componentDidUpdate(preProps) {
    if (this.props.match.params.id !== preProps.match.params.id) {
      this.getDetails()
    }
  }

  getDetails = async () => {
    const { match } = this.props
    const { params } = match
    const { id } = params

    const url = `https://casa-mart.onrender.com/kitchen-items/${id}`
    const options = { method: "GET" }

    const response = await fetch(url, options)
    const data = await response.json()

    const images = data.data[0].images.map((each) => ({
      id: uuidv4(),
      image: each,
    }))

    this.setState({ details: data.data[0], images })
  }

  getRealatedItems = async () => {
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
        relatedKitchenData: responseData,
      })
    }
  }

  commentClick = () => {
    this.setState((pre) => ({ commentStatus: !pre.commentStatus }))
  }

  getCommentUserName = (e) => {
    this.setState({ commentUserName: e.target.value })
  }

  getComment = (e) => {
    this.setState({ userComment: e.target.value })
  }

  collectComment = () => {
    const { commentUserName, userComment, comments } = this.state

    if (!commentUserName || !userComment) {
      alert("Please enter both name and comment!")
      return
    }

    const newComment = {
      id: uuidv4,
      name: commentUserName,
      comment: userComment,
    }

    this.setState({
      comments: [...comments, newComment],
      commentUserName: "",
      userComment: "",
      commentStatus: false,
    })
  }

  render() {
    const { details, images, relatedKitchenData, comments, commentStatus } =
      this.state
    console.log(details)

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    }

    return (
      <CasaMartContext.Consumer>
        {(value) => {
          const { addToCart, cartList } = value

          const addToCartClicked = () => {
            const cartItem = {
              id: details._id,
              name: details.name,
              price: details.discount_price,
              Quantity: 1,
            }

            addToCart(cartItem)
          }

          return (
            <div className="w-full flex flex-col items-center justify-center">
              <div className="bg-green-400 h-24 md:h-28 flex justify-between items-center w-screen">
                <Link to="/kitchenItems">
                  <button type="button" className="text-white text-3xl ml-6">
                    <FaArrowLeft className="text-3xl" />
                  </button>
                </Link>
                <input
                  type="search"
                  className="bg-white h-2/5 md:h-2/4 md:w-3/5 rounded md:rounded-xl pl-3 outline-none border-none md:text-xl"
                  placeholder="Search..."
                />

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
              {/* Carousel Section */}
              <ToastContainer />
              <div className="w-full flex justify-center items-center p-4">
                <Slider {...settings} className="w-full md:w-3/4 lg:w-2/4">
                  {images.map((each) => (
                    <div
                      key={each.id}
                      className="flex justify-center items-center"
                    >
                      <img
                        src={each.image}
                        alt="Appliance"
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Product Details Section */}
              <div className="mt-6 p-4 w-4/5 border rounded shadow-md bg-gray-100">
                <h2 className="text-2xl font-bold mb-2">
                  {details.name || "Product Name"}
                </h2>
                <p className="text-gray-700 mb-4">
                  {details.description || "Product Description"}
                </p>
                <p className="text-lg font-semibold text-green-600 mb-2">
                  Discounted Price: ₹{details.discount_price}
                </p>
                <p className="text-lg text-gray-600 line-through mb-4">
                  Original Price: ₹{details.price}
                </p>
                <h3 className="text-xl font-bold mb-2">Features:</h3>
                <ul className="list-disc pl-6">
                  {details.features?.map((feature, index) => (
                    <li key={index} className="text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <button
                    className="bg-yellow-400 border-none outline-none p-4 rounded-lg cursor-pointer"
                    onClick={addToCartClicked}
                  >
                    Buy Now
                  </button>
                  <button
                    className="bg-blue-300 border-none outline-none p-4 rounded-lg cursor-pointer"
                    onClick={addToCartClicked}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/*Related Products */}
              <div className="mt-6 p-4 w-4/5 border rounded shadow-md bg-gray-100">
                <h1 className="text-start md:text-xl ml-2 font-semibold text-gray-800">
                  Related Products
                </h1>

                <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide  ">
                  {relatedKitchenData.map((each) => (
                    <Link key={each.id} to={`/GetHomeAppliances/${each.id}`}>
                      <div
                        key={each.id}
                        className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0"
                      >
                        <img
                          src={each.images[0]}
                          alt={each.name}
                          className="w-full h-40 object-cover rounded-md"
                        />
                        <p className="mt-2 text-center font-semibold text-gray-500">
                          {each.name}
                        </p>
                        <div className="flex space-x-2 justify-center">
                          <p className="line-through text-gray-700 ">
                            {each.price}
                          </p>
                          <p className="text-green-800">{each.discountPrice}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Description Of Product */}
              <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-3 text-center">
                Product Details
              </h1>
              <div className="mt-6 p-4 w-4/5 border rounded shadow-md bg-gray-100 flex flex-col justify-center items-center">
                <div className="flex justify-center items-center flex-col md:w-2/4">
                  <h2 className="text-2xl font-bold mb-2">
                    {details.name || "Product Name"}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {details.description || "Product Description"}
                  </p>
                  <p className="text-lg text-left font-semibold text-green-600 mb-2">
                    Discounted Price: ₹{details.discount_price}
                  </p>
                  <p className="text-lg text-gray-600 line-through mb-4">
                    Original Price: ₹{details.price}
                  </p>

                  <ul className="space-y-3 w-full ">
                    {details.features?.map((feature, index) => (
                      <li
                        key={index}
                        className=" list-none bg-red-400 p-5 rounded text-white"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <h1 className="text-lg font-bold mt-5 mb-3">
                    Product Images
                  </h1>
                  <div className="space-y-8">
                    {images.map((each, index) => (
                      <div key={index}>
                        <img
                          src={each.image}
                          alt="product-image"
                          className="rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/*Home Appliances */}
              <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-3 text-center">
                Home Appliances
              </h1>
              <div className="mt-6 p-4 w-4/5 border rounded shadow-md bg-gray-100">
                <Link
                  to="/HomeAppliances"
                  className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide"
                >
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/ceiling-fan-decoration-interior-room_74190-8490.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Ceiling Fans
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/close-up-air-fryer_23-2151723532.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Humidifiers
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-vector/climate-control-poster-with-air-conditioning-technology-symbols-realistic-illustration_1284-29136.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Air Conditioners
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-vector/different-heaters-interior-realistic-illustration_1284-59763.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Room Heaters
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-vector/realistic-sunbed-illustration_23-2149456028.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Air Coolers
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/ceiling-fan-decoration-interior-room_74190-8490.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Ceiling Fans
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/close-up-air-fryer_23-2151723532.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Humidifiers
                    </p>
                  </div>
                </Link>
              </div>

              {/* Living Room Appliences */}

              <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-3 text-center">
                Living Room Products
              </h1>
              <div className="mt-6 p-4 w-4/5 border rounded shadow-md bg-gray-100">
                <Link
                  to="/livingroom"
                  className="flex  overflow-x-auto space-x-4 p-4 scrollbar-hide"
                >
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/pillow-sofa_74190-3590.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Wooden coffee tables
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/empty-chair-table-with-outdoor-deck_74190-1707.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Glass-top coffee tables
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/sofa-chair_74190-3822.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Nesting tables
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/pillow-sofa_74190-3590.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Wooden coffee tables
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/empty-chair-table-with-outdoor-deck_74190-1707.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Glass-top coffee tables
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/pillow-sofa_74190-3590.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Wooden coffee tables
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/empty-chair-table-with-outdoor-deck_74190-1707.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Glass-top coffee tables
                    </p>
                  </div>
                </Link>
              </div>

              {/* Furniture */}
              <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-3 text-center">
                Furniture Items
              </h1>
              <div className="mt-6 p-4 w-4/5 border rounded shadow-md bg-gray-100">
                <Link
                  to="/furnitureitems"
                  className="flex  overflow-x-auto space-x-4 p-4 scrollbar-hide"
                >
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/empty-chair-restaurant_1339-5439.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Wooden benches
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/close-up-metallic-seat_23-2151113122.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Metal park benches
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/blond-female-teenager-relaxing-round-black-artistic-chair_613910-10706.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Hanging egg chairs
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/close-up-metallic-seat_23-2151113122.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Metal park benches
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/blond-female-teenager-relaxing-round-black-artistic-chair_613910-10706.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Hanging egg chairs
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/close-up-metallic-seat_23-2151113122.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Metal park benches
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/blond-female-teenager-relaxing-round-black-artistic-chair_613910-10706.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="text-center text-blue-800 font-semibold text-sm md:text-2xl w-56 md:w-full ">
                      Hanging egg chairs
                    </p>
                  </div>
                </Link>
              </div>

              {/* Kitchen Products*/}

              <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-3 text-center">
                Kitchen Products
              </h1>
              <div className="mt-6 p-4 w-4/5 border rounded shadow-md bg-gray-100">
                <Link
                  to="/kitchenItems"
                  className="flex  overflow-x-auto space-x-4 p-4 scrollbar-hide"
                >
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/close-up-sustainable-cutlery-alternatives_23-2149165744.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Slotted Serving Spoon
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/assortment-salad-ingredients-white-background_23-2148541904.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Salad Tongs
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/chef-white-uniform-prepare-pizzaa_1157-27030.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Pizza Cutter
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/assortment-salad-ingredients-white-background_23-2148541904.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Salad Tongs
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/chef-white-uniform-prepare-pizzaa_1157-27030.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Pizza Cutter
                    </p>
                  </div>
                </Link>
              </div>

              {/* Lighting */}

              <h1 className="text-xl md:text-3xl font-semibold mt-3 mb-3 ml-3 text-center">
                Lighting Products
              </h1>
              <div className="mt-6 p-4 w-4/5 border rounded shadow-md bg-gray-100">
                <Link
                  to="/livingroom"
                  className="flex  overflow-x-auto space-x-4 p-4 scrollbar-hide"
                >
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-vector/vector-house-interior-with-white-armchair-black-floor-lamp-red-book-violet-wall-front-view_1284-48469.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Floor lamps
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037457.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Table lamps
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/antique-restaurant-light-provides-serene-atmosphere_60438-3784.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Pendant lights
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037457.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Table lamps
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/antique-restaurant-light-provides-serene-atmosphere_60438-3784.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Pendant lights
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037457.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Table lamps
                    </p>
                  </div>
                  <div className="p-4 w-64 bg-white rounded-lg shadow-md snap-center flex-shrink-0">
                    <img
                      src="https://img.freepik.com/free-photo/antique-restaurant-light-provides-serene-atmosphere_60438-3784.jpg?uid=R176173293&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid"
                      alt="Air Conditioner"
                      className="h-48 md:h-5/6 w-full rounded"
                    />
                    <p className="mt-2 text-center font-semibold text-gray-500">
                      Pendant lights
                    </p>
                  </div>
                </Link>
              </div>

              {/* Comments */}
              <div className="bg-gray-100 mt-5 w-4/5 shadow-lg border rounded p-5">
                <h1 className="text-gray-800 text-2xl">Comments</h1>
                <div className="space-y-4 mt-4">
                  {comments.map((each, index) => (
                    <div
                      key={each.id}
                      className="bg-white flex items-center shadow-sm p-4 border"
                    >
                      <div>
                        <CgProfile size={30} />
                      </div>
                      <div className="w-4/5 pl-4">
                        <h5 className="font-semibold">{each.name}</h5>
                        <p>{each.comment}</p>
                      </div>
                      <div className="md:w-1/5 md:flex justify-end md:items-center">
                        <CgPen />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {commentStatus ? (
                    <div className="border w-full flex flex-col space-y-3 mt-6">
                      <div className="w-full ">
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className="w-full p-4"
                          onChange={this.getCommentUserName}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              this.collectComment()
                            }
                          }}
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Your Comment"
                          className="w-full p-4"
                          onChange={this.getComment}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              this.collectComment()
                            }
                          }}
                          required
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          className="bg-slate-500 p-4 rounded shadow-lg border-none outline-none cursor-pointer mt-5"
                          onClick={() => this.collectComment()}
                        >
                          Throw
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    type="button"
                    className="bg-yellow-400 p-4 rounded shadow-lg border-none outline-none cursor-pointer mt-5"
                    onClick={this.commentClick}
                  >
                    Comment
                  </button>
                </div>
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
                      &copy; 2025 Casamart. All rights reserved.
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
export default KitchenItemDetails
