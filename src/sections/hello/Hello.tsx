import React from "react"
import background from "./background.svg"
import styled, { css, keyframes } from "styled-components"
import { backgroundSoft, primary } from "styles/globals"

const StyledHelloRoot = styled.div`
  background-color: ${backgroundSoft};
`

const StyledImage = styled.div`
  background-size: cover;
  background-position: center;

  padding: 50px 50px;
`

const StyledTitle = styled.div`
  > h1 {
    font-size: 1.3rem;
    font-weight: 800;
    margin: 0;
    padding: 0;
    line-height: 1;

    .lastname {
      color: ${primary};
    }
  }

  .description {
    color: ${primary};
  }
`

const StyledWelcome = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledHelloMessage = styled.div`
  display: flex;
  align-items: flex-end;
`

const StyledMe = styled.div`
  color: white;
  background-color: ${primary};
  border-radius: 999px;
  font-size: 1.3rem;
  font-weight: 800;
  padding: 4px;
`

const size = "34px"

const StyledMeContain = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${size};
  height: ${size};
  line-height: 1;
`

const StyledMessages = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`

const messageTopAnim = keyframes`
  0% {
    transform: translateY(100%);
    padding: 0px 0px 0px 0px;
    font-size: 0.6rem;
    opacity: 0;
    border-radius: 25px 25px 25px 25px;
  }
  10% {
    transform: translateY(100%);
    padding: 5px 40px 5px 20px;
    font-size: 1.4rem;
    opacity: 1;
    border-radius: 25px 25px 25px 25px;
  }
  20% {
    transform: translateY(0%);
    border-radius: 25px 25px 25px 5px;
  }
  70% {
    border-radius: 25px 25px 25px 5px;
  }
  80% {
    border-radius: 25px 25px 25px 25px;
  }
  90% {
    border-radius: 25px 25px 25px 5px;
  }
`

const messageStyles = css`
  background-color: ${primary};
  color: white;
  border-radius: 25px;
  padding: 5px 20px;
  font-size: 1.4rem;
  font-weight: 800;
  min-height: 35px;
  display: flex;
  align-items: center;
`

const StyledMessageTop = styled.div`
  ${messageStyles}
  align-self: flex-start;
  text-transform: uppercase;
  padding-right: 40px;
  border-radius: 25px 25px 25px 5px;
  animation: ${messageTopAnim} 12s;
`

const messageBottomAnim = keyframes`
  0% {
    padding: 0px 0px 0px 0px;
    font-size: 0.6rem;
    opacity: 0;
    min-height: 35px;
    height: initial;
  }
  10% {
    padding: 0px 0px 0px 0px;
    font-size: 0.6rem;
    opacity: 0;
  }
  20% {
    padding: 5px 20px 5px 20px;
    font-size: 1.4rem;
    opacity: 1;
  }
  60% {
    padding: 5px 20px 5px 20px;
    font-size: 1.4rem;
    opacity: 1;
  }
  70% {
    padding: 0px 0px 0px 0px;
    font-size: 0.6rem;
    opacity: 0;
    min-height: 35px;
    height: initial;
  }
  80% {
    padding: 0px 0px 0px 0px;
    font-size: 0.6rem;
    opacity: 0;
    height: 0;
    min-height: 0;
  }
`

const StyledMessageBottom = styled.div`
  ${messageStyles}
  height: 0;
  min-height: 0;
  margin-top: 5px;
  border-radius: 5px 25px 25px 25px;
  align-self: flex-start;
  animation: ${messageBottomAnim} 12s;

  padding: 0px 0px 0px 0px;
  font-size: 0.6rem;
  opacity: 0;
`

const dotAnim = keyframes`
  0% {
    position: relative;
    bottom: 0;
  }
  75% {
    position: relative;
    bottom: 0;
  }
  87% {
    position: relative;
    bottom: 12px;
  }
  100% {
    position: relative;
    bottom: 0;
  }
`
const dotSize = "10px"

const StyledDot = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 999px;
  height: ${dotSize};
  width: ${dotSize};
  margin-right: 5px;
  animation: ${dotAnim} 4s normal 0.2s infinite;

  &:first-child {
    animation: ${dotAnim} 4s normal 0s infinite;
  }

  &:last-child {
    margin-right: 0;
    animation: ${dotAnim} 4s normal 0.4s infinite;
  }
`

const messageDotNoWaitAnim = keyframes`
 0% {
    padding: 0px 0px 0px 0px;
    font-size: 0.6rem;
    opacity: 0;
    height: 0;
    min-height: 0;
  }
  80% {
    padding: 0px 0px 0px 0px;
    font-size: 0.6rem;
    opacity: 0;
    height: 0;
    min-height: 0;
  }
  90% {
    padding: 0px 0px 0px 0px;
    font-size: 0.6rem;
    opacity: 0;
    height: initial;
    min-height: 35px;
  }
  100% {
    padding: 5px 20px 5px 20px;
    font-size: 1.4rem;
    opacity: 1s;
  }
`

const StyledMessageDoNotWait = styled.div`
  ${messageStyles}
  border-radius: 5px 25px 25px 25px;
  align-self: flex-start;
  padding-right: 40px;
  font-weight: 300;
  animation: ${messageDotNoWaitAnim} 12s;
`

const Hello = () => {
  return (
    <StyledHelloRoot>
      <StyledImage style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <StyledTitle>
            <h1>
              Tâm-Tanguy <span className="lastname">TRAN</span>
            </h1>
            <div className="description">Software Engineer</div>
          </StyledTitle>
          <StyledWelcome>
            <StyledHelloMessage>
              <StyledMe>
                <StyledMeContain>TT</StyledMeContain>
              </StyledMe>
              <StyledMessages>
                <StyledMessageTop>Welcome!</StyledMessageTop>
                <StyledMessageBottom>
                  <StyledDot />
                  <StyledDot />
                  <StyledDot />
                </StyledMessageBottom>
                <StyledMessageDoNotWait>
                  I think you should scroll 🙃
                </StyledMessageDoNotWait>
              </StyledMessages>
            </StyledHelloMessage>
          </StyledWelcome>
        </div>
      </StyledImage>
    </StyledHelloRoot>
  )
}

export default Hello
