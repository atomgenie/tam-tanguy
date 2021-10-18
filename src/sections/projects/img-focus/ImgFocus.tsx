import React, { useRef } from "react"
import { useDetectClickOutside } from "helpers/hooks"
import { FiX } from "react-icons/fi"
import styled from "styled-components"

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
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  max-height: 100vh;
  padding: 100px 20px;
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
  right: 15px;
  top: 15px;
  width: 15px;
  height: 15px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 999px;
  color: white;
  font-size: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const StyledImgContent = styled.img`
  border-radius: 20px;
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
