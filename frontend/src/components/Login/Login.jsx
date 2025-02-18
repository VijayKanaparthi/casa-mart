import React from "react"

import { MdEmail } from "react-icons/md"
import { CiLock } from "react-icons/ci"
import Cookies from "js-cookie"

import logo from "../Assests/logo.png"
import { Link, Redirect } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

class Login extends React.Component {
  state = { email: "", password: "", error: "", errorShow: false }

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

  userEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  userPassword = (e) => {
    this.setState({ password: e.target.value })
  }

  login = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const userDetails = { email, password }
    const url = "http://localhost:4000/login"
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
      Cookies.set("jwt_token", data.user.jwt_token, { expires: 30 })
      this.props.history.replace("/")
    } else {
      this.setState({ error: data.message, errorShow: true })
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
        <div className="w-10/12 rounded-md  md:h-2/5 lg:h-2/3 flex flex-col justify-center items-center md:justify-evenly md:items-center md:flex-row shadow-2xl shadow-green-500 p-2 md:p-1">
          <div className="md:w-2/4 w-2/5 h-full flex justify-center items-center ">
            <img src={logo} alt="Casa Mart" className="lg:w-2/4 lg:h-2/4" />
          </div>
          <div className="md:w-2/4 w-3/5 flex flex-col justify-evenly items-center md:h-full">
            <div className="bg-green-600 hidden md:flex text-white  justify-center items-center rounded p-3 w-3/4 md:w-10/12 lg:w-2/4">
              <h1 className="md:text-3xl text-sm  font-semibold ">LOG IN</h1>
            </div>

            <form
              className="mt-1 w-full flex flex-col justify-center items-center h-3/4"
              onSubmit={this.login}
            >
              <div className="flex gap-2 mb-2 w-full md:w-10/12 lg:w-2/4 shadow-sm shadow-green-300 border-lg border-green-300 border-2 rounded-md">
                <div className="bg-green-300 p-3 rounded-sm flex justify-center items-center">
                  <MdEmail />
                </div>
                <div className="md:p-3 p-1">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="outline-none border-none w-full text-sm md:text-lg"
                    onChange={this.userEmail}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2 mb-2 w-full md:w-10/12 lg:w-2/4 shadow-sm shadow-green-300 border-lg border-green-300 border-2 rounded-md">
                <div className="bg-green-300 p-3 rounded-sm flex justify-center items-center">
                  <CiLock />
                </div>
                <div className="md:p-3 p-1">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="outline-none border-none w-full text-sm md:text-lg"
                    onChange={this.userPassword}
                    required
                  />
                </div>
              </div>
              <div className="lg:w-2/4 md:w-10/12 w-full text-green-600 font-medium mb-2 text-sm md:text-lg lg:text-xl ">
                <Link to="/forgot-password">Forgot password ?</Link>
              </div>

              <button
                type="submit"
                className="bg-green-600 rounded p-2 outline-none border-2 hover:bg-white border-green-400 hover:text-black  cursor-pointer md:w-10/12 lg:w-2/4 w-full text-white"
              >
                Log In
              </button>
              {errorShow ? (
                <p className="text-red-600 text-sm md:text-lg lg:text-xl">
                  *{error}
                </p>
              ) : (
                ""
              )}

              <div className="mt-5">
                <p className="text-sm md:text-xl">
                  Don't have Account ?{" "}
                  <span className="text-green-600 underline">
                    <Link to="/signup">Sign Up</Link>
                  </span>
                </p>
              </div>
              <div className="pt-2 space-y-3">
                <h3>Email: vijaymca2025@gmail.com</h3>
                <h3>password: Spiher@123</h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
