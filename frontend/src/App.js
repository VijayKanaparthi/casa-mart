import { Route, Switch } from "react-router-dom"

import LandingPage from "./components/LandingPage/LandingPage"
import SignUp from "./components/SignUp/SignUp"
import VerifyEmail from "./components/VerifyEmail/VerifyEmail"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword"
import ResetPassword from "./components/ResetPassword/ResetPassword"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Cleaning from "./components/Cleaning/Cleaning"
import Furniture from "./components/Furniture/Furniture"
import Kitchen from "./components/Kitchen/Kitchen"
import LivingRoom from "./components/LivingRoom/LivingRoom"
import HomeAppliences from "./components/HomeAppliences"
import HomeAppliancesDetails from "./components/HomeAppilencesDetails"
import Cart from "./components/Cart"
import CasaMartContext from "./context/CasaMartContext"
import React from "react"
import { toast } from "react-toastify"
import LivingRoomItems from "./components/LivingRoomItems/LivingRoomItems"
import LivingItemsDetails from "./components/LivingItemsDetails/LivingItemsDetails"
import FurnitureItems from "./components/FurnitureItems/FurnitureItems"
import FurnitureItemDetails from "./components/FurnitureItemDetails/FurnitureItemDetails"
import KitchenItems from "./components/KitchenItems/KitchenItems"
import KitchenItemDetails from "./components/KitchenItemDetails/KitchenItemDetails"
import CleaningItems from "./components/CleaningItems/CleaningItems"
import CleaningItemDetails from "./components/CleaningItemDetails/CleaningItemDetails"

class App extends React.Component {
  state = { cartList: [], activeTab: "Home-Appliences" }

  changeActiveTab = (current_tab) => {
    this.setState({ activeTab: current_tab })
  }

  addToCart = (item) => {
    const { cartList } = this.state
    toast.success(
      `${item.name} Added To Cart`,
      { autoClose: 4000 },
      { position: "top-center" }
    )
    const isThere = cartList.find((each) => each.id === item.id)
    if (isThere) {
      cartList.map((each) => {
        if (each.id === item.id) {
          each.Quantity = each.Quantity + 1
        }
        return null
      })
    } else {
      this.setState((pre) => ({ cartList: [...pre.cartList, item] }))
    }
  }

  removeItem = (id) => {
    const { cartList } = this.state
    const updateList = cartList.filter((each) => each.id !== id)
    this.setState({ cartList: updateList })
  }

  increaseItem = (id) => {
    console.log(true)

    this.setState((pre) => {
      const updateList = pre.cartList.map((each) => {
        if (each.id === id) {
          return { ...each, Quantity: each.Quantity + 1 }
        }
        return each
      })
      return { cartList: updateList }
    })
  }

  decreseItem = (id) => {
    this.setState((pre) => {
      const updateList = pre.cartList.map((each) => {
        if (each.id === id) {
          if ({ ...each, Quantity: each.Quantity >= 0 }) {
            return { ...each, Quantity: each.Quantity - 1 }
          }
        }
        return each
      })
      return { cartList: updateList }
    })
  }

  render() {
    const { cartList, activeTab } = this.state
    return (
      <>
        <CasaMartContext.Provider
          value={{
            cartList,
            activeTab,
            addToCart: this.addToCart,
            removeItem: this.removeItem,
            increaseItem: this.increaseItem,
            decreseItem: this.decreseItem,
            changeActiveTab: this.changeActiveTab,
          }}
        >
          <Switch>
            <Route exact path="/landingpage" component={LandingPage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route exact path="/verify-email" component={VerifyEmail} />
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route
              exact
              path="/reset-password/:token"
              component={ResetPassword}
            />
            <ProtectedRoute exact path="/cleaning" component={Cleaning} />
            <ProtectedRoute exact path="/furniture" component={Furniture} />
            <ProtectedRoute exact path="/kitchen" component={Kitchen} />
            <ProtectedRoute exact path="/living-room" component={LivingRoom} />
            <ProtectedRoute
              exact
              path="/HomeAppliances"
              component={HomeAppliences}
            />
            <ProtectedRoute
              exact
              path="/GetHomeAppliances/:id"
              component={HomeAppliancesDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <ProtectedRoute
              exact
              path="/livingroom"
              component={LivingRoomItems}
            />
            <ProtectedRoute
              exact
              path="/livingroomitems/:id"
              component={LivingItemsDetails}
            />
            <ProtectedRoute
              exact
              path="/furnitureitems"
              component={FurnitureItems}
            />
            <ProtectedRoute
              exact
              path="/getfurnitureitems/:id"
              component={FurnitureItemDetails}
            />
            <ProtectedRoute
              exact
              path="/kitchenItems"
              component={KitchenItems}
            />
            <ProtectedRoute
              exact
              path="/kitchenItems/:id"
              component={KitchenItemDetails}
            />
            <ProtectedRoute
              exact
              path="/cleaningItems"
              component={CleaningItems}
            />
            <ProtectedRoute
              exact
              path="/cleaningItems/:id"
              component={CleaningItemDetails}
            />
          </Switch>
        </CasaMartContext.Provider>
      </>
    )
  }
}

export default App
