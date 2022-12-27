import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, handleClick }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} handleClick={handleClick}  />
      <Navbar />
    </>
  )
}

export default Header
