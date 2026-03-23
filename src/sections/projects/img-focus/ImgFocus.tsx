import React, { useRef } from "react"
import { useDetectClickOutside } from "helpers/hooks"
import { FiX } from "react-icons/fi"
import styled from "styled-components"
import { colorBg, colorAccent, transitionBase } from "styles/globals"

interface props {
  imgUrl?: string
  onClose?: () => void
  isOpen: boolean
}

const StyledRoot = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  max-height: 100vh;
  padding: 80px 20px;
  display: flex;
  overflow-y: scroll;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`

const StyledContent = styled.div`
  max-width: 1000px;
  position: relative;
  cursor: initial;
`

const StyledCloseButton = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  width: 32px;
  height: 32px;
  background-color: ${colorAccent};
  border: 1px solid ${colorAccent};
  cursor: pointer;
  color: ${colorBg};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${transitionBase}, color ${transitionBase};
  z-index: 1;

  &:hover {
    background-color: transparent;
    color: ${colorAccent};
  }
`

const StyledImgContent = styled.img`
  display: block;
  max-width: 100%;
`

const ImgFocus: React.FC<props> = ({ imgUrl, isOpen, onClose }) => {
  const contentRef = useRef(null)

  useDetectClickOutside(contentRef, isOpen, () => {
    onClose && onClose()
  })

  if (!isOpen || !imgUrl) {
    return <div />
  }

  return (
    <StyledRoot>
      <StyledContent ref={contentRef}>
        <StyledCloseButton onClick={onClose}>
          <FiX />
        </StyledCloseButton>
        <StyledImgContent src={imgUrl} alt="Project content" />
      </StyledContent>
    </StyledRoot>
  )
}

export default ImgFocus
