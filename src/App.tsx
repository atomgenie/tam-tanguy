import React from "react"
import "./App.css"
import Hello from "./sections/hello/Hello"
import Me from "./sections/me/Me"
import Projects from "./sections/projects/Projects"
import Footer from "./sections/footer/Footer"
import GridLines from "./components/GridLines"
import NoiseOverlay from "./components/NoiseOverlay"
import styled from "styled-components"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { colorBg, colorText, colorAccent, transitionBase, shadowSm, shadowMd } from "./styles/globals"

const FloatingButton = styled.a`
  position: fixed;
  bottom: 24px;
  left: 24px;
  width: 52px;
  height: 52px;
  background-color: ${colorBg};
  border: 1px solid ${colorText};
  color: ${colorText};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${shadowSm};
  transition: border-color ${transitionBase}, color ${transitionBase}, box-shadow ${transitionBase};
  z-index: 1000;

  &:hover {
    border-color: ${colorAccent};
    color: ${colorAccent};
    box-shadow: ${shadowMd};
  }
`

const App = () => {
  return (
    <>
      <GridLines />
      <NoiseOverlay />
      <Hello />
      <Me />
      <Projects />
      <Footer />
      <FloatingButton
        href="https://companion.frontapp.com/eyJjbyI6MjYwMjgsImNhIjoyNjc3NTExOH0/widget"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us"
      >
        <IoChatbubbleEllipsesOutline size={24} />
      </FloatingButton>
    </>
  )
}

export default App
