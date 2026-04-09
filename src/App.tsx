import React from "react"
import "./App.css"
import Hello from "./sections/hello/Hello"
import Me from "./sections/me/Me"
import Projects from "./sections/projects/Projects"
import Footer from "./sections/footer/Footer"
import styled from "styled-components"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { colorAccent } from "./styles/globals"

const FloatingButton = styled.a`
  position: fixed;
  bottom: 24px;
  left: 24px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${colorAccent};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`

const App = () => {
  return (
    <>
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
