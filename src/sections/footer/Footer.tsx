import React from "react"
import { FiMail, FiLinkedin } from "react-icons/fi"
import styled from "styled-components"
import { backgroundSoft, primary, shadow05 } from "styles/globals"

const StyledRoot = styled.div`
  background-color: ${backgroundSoft};
  padding: 50px 50px;
`

const StyledTitle = styled.div`
  color: ${primary};
  font-size: 1.3rem;
  font-weight: 800;
`

const StyledLinks = styled.div`
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledItem = styled.a`
  ${shadow05}
  background-color: white;
  border-radius: 15px;

  display: flex;
  align-items: center;
  padding: 12px 25px;
  color: ${primary};
  margin-bottom: 10px;
`

const StyledItemText = styled.div`
  color: black;
  margin-left: 20px;
`

const Footer = () => {
  return (
    <StyledRoot>
      <div className="container">
        <StyledTitle>How to contact me?</StyledTitle>
        <StyledLinks>
          <StyledItem href="mailto:tran@tamtanguy.fr">
            <FiMail />
            <StyledItemText>tran@tamtanguy.fr</StyledItemText>
          </StyledItem>
          <StyledItem
            href="https://www.linkedin.com/in/t%C3%A2m-tanguy-tran-14028a1ab/"
            target="blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
            <StyledItemText>Linkedin</StyledItemText>
          </StyledItem>
        </StyledLinks>
      </div>
    </StyledRoot>
  )
}

export default Footer
