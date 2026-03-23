import React from "react"
import { FiMail, FiLinkedin } from "react-icons/fi"
import styled from "styled-components"
import {
  colorBg,
  colorBorder,
  colorText,
  colorTextMuted,
  colorAccent,
  containerStyles,
  space2,
  space3,
  space4,
  space5,
  transitionBase,
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

const StyledLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${colorTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${space2};
`

const StyledHeading = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
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

const StyledItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${space2};
  padding: 10px ${space3};
  background-color: ${colorBg};
  border: 1px solid ${colorBorder};
  color: ${colorText};
  text-decoration: none;
  transition: border-color ${transitionBase}, color ${transitionBase};

  &:hover {
    border-color: ${colorAccent};
    color: ${colorAccent};
  }
`

const StyledItemIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`

const StyledItemText = styled.div`
  font-size: 1rem;
`

const Footer = () => {
  return (
    <StyledRoot>
      <StyledContainer>
        <StyledLeft>
          <StyledLabel>Contact</StyledLabel>
          <StyledHeading>Get in touch</StyledHeading>
        </StyledLeft>
        <StyledLinks>
          <StyledItem href="mailto:tran@tamtanguy.fr">
            <StyledItemIcon>
              <FiMail />
            </StyledItemIcon>
            <StyledItemText>tran@tamtanguy.fr</StyledItemText>
          </StyledItem>
          <StyledItem
            href="https://www.linkedin.com/in/t%C3%A2m-tanguy-tran-14028a1ab/"
            target="blank"
            rel="noopener noreferrer"
          >
            <StyledItemIcon>
              <FiLinkedin />
            </StyledItemIcon>
            <StyledItemText>LinkedIn</StyledItemText>
          </StyledItem>
        </StyledLinks>
      </StyledContainer>
    </StyledRoot>
  )
}

export default Footer
