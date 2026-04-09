import React, { FC } from "react"
import { styled } from "styled-components"

/*
 * Props.
 */

interface CompanionProps {}

/*
 * Styles.
 */
const StyledCompanionContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
`

/*
 * Component.
 */

export const Companion: FC<CompanionProps> = props => {
  const {} = props

  return (
    <StyledCompanionContainer>
      <div id="companion-container" />
    </StyledCompanionContainer>
  )
}
