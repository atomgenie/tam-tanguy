import React from "react"
import { useSpring, a, easings } from "@react-spring/web"
import styled from "styled-components"
import Overline from "components/Overline"
import { usePrefersReducedMotion } from "helpers/hooks"
import {
  colorBg,
  colorText,
  colorAccent,
  containerStyles,
  fontSerif,
  fontSans,
  space1,
  space4,
  space5,
  space8,
  tabletMax,
} from "styles/globals"

const StyledRoot = styled.div`
  background-color: ${colorBg};
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;

  /* One restrained outline rectangle — a quiet echo, not a texture field */
  &::after {
    content: "";
    position: absolute;
    bottom: -80px;
    right: -40px;
    width: 320px;
    height: 480px;
    border: 1px solid ${colorText};
    opacity: 0.15;
    pointer-events: none;
  }
`

const StyledContainer = styled.div`
  ${containerStyles}
  padding-top: ${space5};
  padding-bottom: ${space8};
  position: relative;
`

const StyledContent = styled(a.div)`
  display: flex;
  flex-direction: column;
  max-width: 720px;
`

const StyledHeading = styled.h1`
  font-family: ${fontSerif};
  font-size: clamp(3rem, 9vw, 6rem);
  font-weight: 400;
  line-height: 0.9;
  margin: 0;
  color: ${colorText};

  .accent {
    font-style: italic;
    font-weight: 500;
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
  font-family: ${fontSans};
  font-size: 0.5625rem;
  font-weight: 500;
  color: ${colorText};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  line-height: 1;
`

const StyledScrollArrow = styled.div`
  width: 0.45rem;
  height: 0.45rem;
  border-right: 1.5px solid ${colorText};
  border-bottom: 1.5px solid ${colorText};
  transform: rotate(45deg);
  flex-shrink: 0;
  margin-top: -3.5px;
`

const StyledVerticalLabel = styled.div`
  position: absolute;
  top: ${space5};
  right: ${space4};
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: ${fontSans};
  font-size: 0.625rem;
  font-weight: 500;
  color: ${colorText};
  letter-spacing: 0.25em;
  text-transform: uppercase;
  opacity: 0.5;

  @media screen and (max-width: ${tabletMax}) {
    display: none;
  }
`

const Hello = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const [springs] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(24px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1100, easing: easings.easeOutCubic },
    immediate: prefersReducedMotion,
  }))

  return (
    <StyledRoot>
      <StyledVerticalLabel>Portfolio — Vol. 01</StyledVerticalLabel>
      <StyledContainer>
        <StyledContent style={springs}>
          <Overline>Software Engineer</Overline>
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
