import React from "react"
import {navigate} from "gatsby"
import Header from "../components/header"

const Test = () => (
  <>
  <Header title="Header of Test"/>
  <div>
    <h1>This is a test page!</h1>
    <button onClick={() => navigate("/")}>Nav to Home</button>
  </div>
  </>
)

export default Test