import { Component } from "react"

import { ToastContainer, toast } from "react-toastify"
import Cookies from "js-cookie"

import "react-toastify/dist/ReactToastify.css"

import logo from "../Assests/logo.png"

class VerifyEmail extends Component {
  state = { code: "", error: "", errorShow: false }

  componentDidMount() {
    const { state } = this.props.location
    if (state && state.successMessage) {
      toast.info(
        state.successMessage,
        { autoClose: 5000 },
        { position: "top-center" }
      )
    }
  }

  submitToken = async () => {
    const { code } = this.state
    const url = "https://casa-mart.onrender.com/verify-email"
    const userDetails = { code }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (data.success === true) {
      Cookies.set("jwt_token", data.customer.jwt_token, { expires: 30 })
      this.props.history.replace("/", {
        successMessage: "SuccessFully logged In",
      })
    } else {
      this.setState({ error: data.message, errorShow: true })
    }
    console.log(data)
  }

  otp = (e) => {
    this.setState({ code: e.target.value })
  }

  render() {
    const { error, errorShow } = this.state
    return (
      <div className="w-screen h-screen flex  justify-center items-center p-5">
        <ToastContainer />
        <div className=" rounded-lg shadow-lg shadow-green-600 border-lg border-green-400 border-solid flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center">
            <img src={logo} alt="casa mart" className="w-4/6" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col mb-4">
              <label className="text-2xl mb-2">Verify Email</label>
              <input
                type="text"
                placeholder="Enter OTP"
                className="border-solid border-green-400 border-2 rounded-md text-xl p-4 outline-none "
                onChange={this.otp}
                required
              />
            </div>
            {errorShow ? <p className="text-red-600 text-2xl">*{error}</p> : ""}
            <button
              onClick={this.submitToken}
              type="button"
              className="bg-green-600 text-white cursor-pointer border-none outline-none p-5 w-full text-2xl rounded-xl mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default VerifyEmail
