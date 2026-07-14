import React from "react"
import styled from "styled-components"
import { zNoise } from "styles/globals"

const noiseSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <filter id="n">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
  </filter>
  <rect width="100%" height="100%" filter="url(#n)" />
</svg>
`

const encodedNoiseSvg = encodeURIComponent(noiseSvg)

const StyledRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${zNoise};
  pointer-events: none;
  opacity: 0.02;
  background-image: url("data:image/svg+xml,${encodedNoiseSvg}");
  background-repeat: repeat;
`

const NoiseOverlay: React.FC = () => <StyledRoot />

export default NoiseOverlay
