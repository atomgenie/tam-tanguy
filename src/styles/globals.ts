import { css } from "styled-components"

// Colors
export const colorBg = "#FFFFFF"
export const colorBorder = "#EDE8FD"
export const colorText = "#0F0F0F"
export const colorTextMuted = "#6B6B6B"
export const colorAccent = "#6E56CF"

// Spacing (8px grid)
export const space1 = "8px"
export const space2 = "16px"
export const space3 = "24px"
export const space4 = "32px"
export const space5 = "48px"
export const space6 = "64px"
export const space7 = "96px"
export const space8 = "128px"

// Breakpoints
export const tabletMax = "1023px"
export const mobileMax = "767px"

// Layout
export const maxWidth = "1100px"

// Transitions
export const transitionBase = "0.2s ease"

// Container mixin
export const containerStyles = css`
  width: 100%;
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 0 ${space3};
`
