import React from "react"
import logo from "../Assests/logo.png"
import Cookies from "js-cookie"
import { Redirect } from "react-router-dom"

class ResetPassword extends React.Component {
  state = { password: "", error: "", errorShow: false }

  resetPassword = async () => {
    const { password } = this.state
    const { match } = this.props
    const { params } = match
    const { token } = params
    const url = `http://localhost:4000/reset-password/${token}`
    const userDetails = { password }
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
      this.props.history.replace("/login", {
        successMessage: "Password Reset SuccessFully",
      })
      window.location.reload()
    } else {
      this.setState({ error: data.message, errorShow: true })
    }
    console.log(data)
  }

  password = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const { error, errorShow } = this.state
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="shadow-lg shadow-green-600 rounded-lg p-3 flex flex-col justify-center items-center">
          <div>
            <img src={logo} alt="Casa Mart" className="lg:w-10/12" />
          </div>
          <div className="w-10/12">
            <h1 className="text-xl md:text-2xl">Reset Your Password</h1>
            <input
              type="text"
              placeholder="Enter Your New Password"
              className="outline-none border-green-500 rounded border-solid border-2 w-full h-12 md:h-16 md:text-xl pl-2"
              onChange={this.password}
              required
            />{" "}
            {errorShow ? <p className="text-red-800 ">*{error}</p> : ""}
            <button
              type="button"
              className="bg-green-600 text-white w-full h-12 rounded mt-2 md:text-xl md:h-16"
              onClick={this.resetPassword}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ResetPassword
