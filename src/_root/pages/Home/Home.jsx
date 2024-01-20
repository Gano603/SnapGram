import React from "react"
import Mainbar from "./components/Mainbar"
import SuggestionBox from "./components/SuggestionBox"


const Home = () => {
  return (
    <div className="flex justify-between ">
      <Mainbar />
      <SuggestionBox />
    </div>
  )
}

export default Home