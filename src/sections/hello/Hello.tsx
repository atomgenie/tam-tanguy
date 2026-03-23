import React, { useEffect } from "react"
import { useSpring, a } from "@react-spring/web"
import styled from "styled-components"
import {
  colorBg,
  colorText,
  colorTextMuted,
  colorAccent,
  containerStyles,
  space3,
  space5,
  space1,
} from "styles/globals"

const StyledRoot = styled.div`
  background-color: ${colorBg};
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  /* Large filled block — bleeds off top and right edges */
  &::before {
    content: "";
    position: absolute;
    top: -60px;
    right: -60px;
    width: 520px;
    height: 400px;
    background-color: ${colorAccent};
    opacity: 0.05;
    pointer-events: none;
  }

  /* Tall outline rectangle — floats lower right, creates diagonal tension */
  &::after {
    content: "";
    position: absolute;
    bottom: 80px;
    right: 100px;
    width: 160px;
    height: 260px;
    border: 10px solid ${colorAccent};
    opacity: 1;
    pointer-events: none;
  }
`

const StyledContainer = styled.div`
  ${containerStyles}
  padding-top: ${space5};
  padding-bottom: ${space5};
`

const StyledContent = styled(a.div)`
  display: flex;
  flex-direction: column;
`

const StyledEyebrow = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${colorTextMuted};
  letter-spacing: 0.05em;
  margin-bottom: ${space3};
`

const StyledHeading = styled.h1`
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 800;
  line-height: 1;
  margin: 0;
  color: ${colorText};
  letter-spacing: -0.02em;

  .accent {
    color: ${colorAccent};
  }
`

const StyledScrollCue = styled.div`
  margin-top: clamp(48px, 6vw, 80px);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${space1};
`

const StyledScrollText = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${colorTextMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1;
`

const StyledScrollArrow = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-right: 1.5px solid ${colorTextMuted};
  border-bottom: 1.5px solid ${colorTextMuted};
  transform: rotate(45deg);
  flex-shrink: 0;
  margin-top: -3.5px;
`

interface RectProps {
  top?: string
  bottom?: string
  left?: string
  right?: string
  width: string
  height: string
  filled?: boolean
  opacity: number
  borderWidth?: string
}

const StyledBgRect = styled.div<RectProps>`
  position: absolute;
  pointer-events: none;
  top: ${({ top }) => top ?? "auto"};
  bottom: ${({ bottom }) => bottom ?? "auto"};
  left: ${({ left }) => left ?? "auto"};
  right: ${({ right }) => right ?? "auto"};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ filled }) => (filled ? colorAccent : "transparent")};
  border: ${({ filled, borderWidth }) =>
    filled ? "none" : `${borderWidth ?? "10px"} solid ${colorAccent}`};
`

const rects: RectProps[] = [
  // Scattered filled shapes — very low opacity texture
  { top: "18%",   left: "5%",    width: "60px",  height: "90px",  filled: true,  opacity: 0.04 },
  { top: "55%",   left: "22%",   width: "100px", height: "40px",  filled: true,  opacity: 0.03 },
  { bottom: "12%",left: "8%",    width: "140px", height: "70px",  filled: true,  opacity: 0.05 },
  { top: "8%",    left: "42%",   width: "50px",  height: "80px",  filled: true,  opacity: 0.04 },
  { bottom: "20%",left: "50%",   width: "80px",  height: "120px", filled: true,  opacity: 0.03 },
  { top: "35%",   right: "30%",  width: "120px", height: "50px",  filled: true,  opacity: 0.04 },
  // Outlined shapes — visible structure
  { top: "10%",   left: "28%",   width: "90px",  height: "140px", filled: false, opacity: 0.12, borderWidth: "2px" },
  { bottom: "15%",right: "25%",  width: "180px", height: "80px",  filled: false, opacity: 0.10, borderWidth: "2px" },
  { top: "50%",   left: "3%",    width: "70px",  height: "110px", filled: false, opacity: 0.08, borderWidth: "2px" },
  { bottom: "28%",left: "44%",   width: "55px",  height: "55px",  filled: false, opacity: 0.15, borderWidth: "10px" },
  // Second wave — more texture
  { top: "5%",    left: "15%",   width: "30px",  height: "50px",  filled: true,  opacity: 0.05 },
  { top: "40%",   left: "38%",   width: "45px",  height: "70px",  filled: true,  opacity: 0.03 },
  { bottom: "30%",left: "35%",   width: "90px",  height: "35px",  filled: true,  opacity: 0.04 },
  { bottom: "5%", right: "42%",  width: "60px",  height: "100px", filled: true,  opacity: 0.03 },
  { top: "65%",   right: "10%",  width: "110px", height: "45px",  filled: true,  opacity: 0.05 },
  { top: "15%",   left: "60%",   width: "40px",  height: "65px",  filled: false, opacity: 0.08, borderWidth: "2px" },
  { bottom: "40%",left: "14%",   width: "120px", height: "55px",  filled: false, opacity: 0.07, borderWidth: "2px" },
  { top: "75%",   left: "55%",   width: "65px",  height: "100px", filled: false, opacity: 0.09, borderWidth: "2px" },
  { top: "62%",   left: "30%",   width: "45px",  height: "45px",  filled: false, opacity: 0.12, borderWidth: "10px" },
  { bottom: "8%", left: "28%",   width: "35px",  height: "35px",  filled: false, opacity: 0.14, borderWidth: "10px" },
]

const Hello = () => {
  const [springs] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(24px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 20 },
  }))

  return (
    <StyledRoot>
      {rects.map((rect, i) => (
        <StyledBgRect key={i} {...rect} />
      ))}
      <StyledContainer>
        <StyledContent style={springs}>
          <StyledEyebrow>Software Engineer</StyledEyebrow>
          <StyledHeading>
            Tâm-Tanguy
            <br />
            <span className="accent">TRAN</span>
          </StyledHeading>
          <StyledScrollCue>
            <StyledScrollText>Scroll</StyledScrollText>
            <StyledScrollArrow />
          </StyledScrollCue>
        </StyledContent>
      </StyledContainer>
    </StyledRoot>
  )
}

export default Hello
