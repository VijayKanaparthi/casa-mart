import React from "react"
import { CgProfile } from "react-icons/cg"
import { MdEmail } from "react-icons/md"
import { CiLock } from "react-icons/ci"

import logo from "../Assests/logo.png"
import { Link, Redirect } from "react-router-dom"
import Cookies from "js-cookie"

class SignUp extends React.Component {
  state = { name: "", email: "", password: "", error: "", errorShow: false }

  userName = (e) => {
    this.setState({ name: e.target.value })
  }

  userEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  userPassword = (e) => {
    this.setState({ password: e.target.value })
  }

  signUp = async (event) => {
    event.preventDefault()
    const url = "http://localhost:4000/signup"
    const { name, email, password } = this.state
    const userDetails = { name, email, password }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const { history } = this.props
      history.replace("/verify-email", {
        successMessage: "Check Your Email",
      })
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
        <div className="w-10/12 rounded-md  md:h-2/5 lg:h-2/3 flex flex-col justify-center items-center md:justify-evenly md:items-center md:flex-row shadow-2xl shadow-green-500 p-2 md:p-1">
          <div className="md:w-2/4 w-2/5 h-full flex justify-center items-center ">
            <img src={logo} alt="Casa Mart" className="lg:w-2/4 lg:h-2/4" />
          </div>
          <div className="md:w-2/4 w-3/5 flex flex-col justify-evenly items-center md:h-full">
            <div className="bg-green-600 hidden md:flex text-white  justify-center items-center rounded p-3 w-3/4 md:w-10/12 lg:w-2/4">
              <h1 className="md:text-3xl text-sm  font-semibold ">SIGN UP</h1>
            </div>

            <form
              className="mt-1 w-full flex flex-col justify-center items-center h-3/4"
              onSubmit={this.signUp}
            >
              <div className="flex gap-2 mb-2 w-full md:w-10/12 lg:w-2/4 shadow-sm shadow-green-300 border-lg border-green-300 border-2 rounded-md">
                <div className="bg-green-300 p-3 rounded-sm text-sm flex justify-center items-center">
                  <CgProfile />
                </div>
                <div className="p-1 md:p-3">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="outline-none border-none text-sm md:text-lg p-1 w-full"
                    onChange={this.userName}
                    required
                  />
                </div>
              </div>
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
              <button
                type="submit"
                className="bg-green-600 rounded p-2 outline-none border-2 hover:bg-white border-green-400 hover:text-black  cursor-pointer md:w-10/12 lg:w-2/4 w-full text-white"
              >
                Signup
              </button>
              {errorShow ? (
                <p className="text-xl text-red-700">*{error}</p>
              ) : (
                ""
              )}
              <div className="mt-5">
                <p className="text-sm md:text-xl">
                  Already I've Account ?{" "}
                  <span className="text-green-600 underline">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
