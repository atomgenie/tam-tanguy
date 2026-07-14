import React from "react"
import { FiMail, FiLinkedin } from "react-icons/fi"
import styled from "styled-components"
import Overline from "components/Overline"
import Button from "components/Button"
import {
  colorBg,
  colorBorder,
  colorText,
  fontSerif,
  containerStyles,
  space2,
  space4,
  space5,
  tabletMax,
} from "styles/globals"

const StyledRoot = styled.footer`
  background-color: ${colorBg};
  border-top: 1px solid ${colorBorder};
  padding: ${space5} 0;
`

const StyledContainer = styled.div`
  ${containerStyles}
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${space4};

  @media screen and (max-width: ${tabletMax}) {
    flex-direction: column;
  }
`

const StyledLeft = styled.div``

const StyledHeading = styled.div`
  font-family: ${fontSerif};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  color: ${colorText};
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space2};
  align-items: flex-end;

  @media screen and (max-width: ${tabletMax}) {
    align-items: flex-start;
  }
`

const Footer = () => {
  return (
    <StyledRoot>
      <StyledContainer>
        <StyledLeft>
          <Overline>Contact</Overline>
          <StyledHeading>Get in touch</StyledHeading>
        </StyledLeft>
        <StyledLinks>
          <Button as="a" variant="secondary" href="mailto:tran@tamtanguy.fr">
            <FiMail />
            tran@tamtanguy.fr
          </Button>
          <Button
            as="a"
            variant="secondary"
            href="https://www.linkedin.com/in/t%C3%A2m-tanguy-tran-14028a1ab/"
            target="blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
            LinkedIn
          </Button>
        </StyledLinks>
      </StyledContainer>
    </StyledRoot>
  )
}

export default Footer
