import React from "react"

const CasaMartContext = React.createContext({
  cartList: [],
  activeTab: "Home-Appliences",
  addToCart: () => {},
  removeItem: () => {},
  increaseItem: () => {},
  decreseItem: () => {},
  changeActiveTab: () => {},
})

export default CasaMartContext
