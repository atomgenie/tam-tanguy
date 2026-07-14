import { css } from "styled-components"

// Colors — Luxury/Editorial palette
export const colorBg = "#F9F8F6" // warm alabaster
export const colorBorder = "rgba(26, 26, 26, 0.12)" // subtle divider
export const colorBorderStrong = "rgba(26, 26, 26, 0.9)" // structural boxes/lists
export const colorText = "#1A1A1A" // rich charcoal
export const colorTextMuted = "#6C6863" // warm grey
export const colorAccent = "#D4AF37" // metallic gold
export const colorAccentFg = "#FFFFFF"
export const colorBgMuted = "#EBE5DE" // pale taupe

// Inverted (dark section) palette
export const colorBgInverted = "#1A1A1A"
export const colorTextInverted = "#F9F8F6"
export const colorTextInvertedMuted = "rgba(249, 248, 246, 0.7)"

// Typography
export const fontSerif = `"Playfair Display", Georgia, serif`
export const fontSans = `"Inter", -apple-system, BlinkMacSystemFont, sans-serif`

// Spacing (8px grid)
export const space1 = "8px"
export const space2 = "16px"
export const space3 = "24px"
export const space4 = "32px"
export const space5 = "48px"
export const space6 = "64px"
export const space7 = "96px"
export const space8 = "128px"
export const space9 = "160px"
export const space10 = "192px"

// Breakpoints
export const tabletMax = "1023px"
export const mobileMax = "767px"

// Layout
export const maxWidth = "1100px"

// Transitions — slow, deliberate, never ease-in-out
export const transitionBase = "600ms ease-out"
export const transitionFast = "500ms ease-out"
export const transitionSlow = "700ms ease-out"
export const transitionImage = "1800ms ease-out" // grayscale/scale image hovers only

// Shadows — subtle, layered, never harsh
export const shadowSm = "0 1px 2px rgba(26, 26, 26, 0.06)"
export const shadowMd = "0 4px 16px rgba(26, 26, 26, 0.08), 0 1px 2px rgba(26, 26, 26, 0.04)"
export const shadowLg = "0 12px 32px rgba(26, 26, 26, 0.12), 0 2px 8px rgba(26, 26, 26, 0.06)"

// z-index scale — ImgFocus modal is hardcoded to 3, FloatingButton to 1000; both stay above these
export const zGridLines = 1
export const zNoise = 2

// Container mixin
export const containerStyles = css`
  width: 100%;
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 0 ${space3};
`
