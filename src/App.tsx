import React from "react"
import "./App.css"
import Hello from "./sections/hello/Hello"
import Me from "./sections/me/Me"
import Projects from "./sections/projects/Projects"
import Footer from "./sections/footer/Footer"
import styled from "styled-components"
import { Companion } from "./sections/companion"

const StyledCompanion = styled.div`
  position: fixed;
  bottom: 60px;
  left: 60px;
`

const App = () => {
  return (
    <>
      <Hello />
      <Me />
      <Projects />
      <Footer />
      <Companion />
    </>
  )
}

export default App
