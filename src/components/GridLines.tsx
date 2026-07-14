import React from "react"
import styled from "styled-components"
import { maxWidth, tabletMax, zGridLines } from "styles/globals"

const maxWidthPx = parseInt(maxWidth, 10)
const half = maxWidthPx / 2
const offsets = [-half, -half + maxWidthPx / 3, -half + (maxWidthPx * 2) / 3, half]

const StyledRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${zGridLines};
  pointer-events: none;

  @media screen and (max-width: ${tabletMax}) {
    display: none;
  }
`

// A pure-white line blended with "difference" reads as a faint dark line on
// light sections and a faint light line on the dark Projects section, so the
// grid stays visible against both without needing per-section color logic.
const StyledLine = styled.div<{ $offset: number }>`
  position: absolute;
  top: 0;
  left: calc(50% + ${({ $offset }) => $offset}px);
  width: 1px;
  height: 100%;
  background-color: #ffffff;
  opacity: 0.2;
  mix-blend-mode: difference;
`

const GridLines: React.FC = () => (
  <StyledRoot>
    {offsets.map(offset => (
      <StyledLine key={offset} $offset={offset} />
    ))}
  </StyledRoot>
)

export default GridLines
