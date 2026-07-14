import React, { ReactNode } from "react"
import styled from "styled-components"
import {
  colorTextMuted,
  colorTextInvertedMuted,
  fontSans,
  space2,
  space3,
} from "styles/globals"

interface StyledProps {
  $inverted?: boolean
}

const StyledOverline = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: ${space2};
  font-family: ${fontSans};
  font-size: 0.6875rem;
  font-weight: 500;
  color: ${({ $inverted }) => ($inverted ? colorTextInvertedMuted : colorTextMuted)};
  text-transform: uppercase;
  letter-spacing: 0.28em;
  margin-bottom: ${space3};

  &::before {
    content: "";
    display: block;
    width: 2rem;
    height: 1px;
    background-color: currentColor;
    opacity: 0.5;
    flex-shrink: 0;
  }
`

interface OverlineProps {
  children: ReactNode
  $inverted?: boolean
  className?: string
}

const Overline: React.FC<OverlineProps> = ({ children, $inverted, className }) => {
  return (
    <StyledOverline $inverted={$inverted} className={className}>
      {children}
    </StyledOverline>
  )
}

export default Overline
