import React from "react"
import "./App.css"
import Hello from "./sections/hello/Hello"
import Me from "./sections/me/Me"
import Projects from "./sections/projects/Projects"
import Footer from "./sections/footer/Footer"

import "bulma"

const App = () => {
  return (
    <>
      <Hello />
      <Me />
      <Projects />
      <Footer />
    </>
  )
}

export default App
