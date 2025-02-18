import React from "react"
import logo from "../Assests/logo.png"
import { toast, ToastContainer } from "react-toastify"
import Cookies from "js-cookie"
import { Redirect } from "react-router-dom"

class ForgotPassword extends React.Component {
  state = { email: "", error: "", errorShow: false }

  newPassword = (e) => {
    this.setState({ email: e.target.value })
  }

  forgotPassword = async () => {
    const { email } = this.state
    const url = "https://casa-mart.onrender.com/forgot-password"
    const userDetails = { email }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (data.success === false) {
      this.setState({ error: data.message, errorShow: true })
    } else {
      toast.success(
        data.message,
        { autoClose: 5000 },
        { position: "top-center" }
      )
    }
    console.log(data)
  }

  render() {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const { error, errorShow } = this.state
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <ToastContainer />
        <div className="shadow-lg shadow-green-600 rounded-lg p-3 flex flex-col justify-center items-center">
          <div>
            <img src={logo} alt="Casa Mart" className="lg:w-10/12" />
          </div>
          <div className="w-10/12">
            <h1 className="text-xl md:text-2xl">FORGOT PASSWORD</h1>
            <input
              type="text"
              placeholder="Enter Email"
              className="outline-none border-green-500 rounded border-solid border-2 w-full h-12 md:h-16 md:text-xl pl-2"
              required
              onChange={this.newPassword}
            />{" "}
            {errorShow ? <p className="text-red-600">*{error}</p> : ""}
            <button
              onClick={this.forgotPassword}
              type="button"
              className="bg-green-600 text-white w-full h-12 rounded mt-2 md:text-xl md:h-16"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPassword
