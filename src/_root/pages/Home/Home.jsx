import React from "react"
import Navbar from "./components/Navbar"
import Mainbar from "./components/Mainbar"
import SuggestionBox from "./components/SuggestionBox"


const Home = () => {
  return (
    <div className="flex justify-between h-[100vh]">
      <Navbar />
      <Mainbar />
      <SuggestionBox />
    </div>
  )
}

export default Home