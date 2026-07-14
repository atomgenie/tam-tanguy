import React, { ReactNode } from "react"
import styled, { css } from "styled-components"
import {
  colorBg,
  colorText,
  colorAccent,
  colorBgInverted,
  colorTextInverted,
  fontSans,
  space2,
  space5,
  transitionBase,
  shadowMd,
  shadowLg,
} from "styles/globals"

type ButtonVariant = "primary" | "secondary"
type ButtonSize = "default" | "icon"

interface StyledRootProps {
  $variant: ButtonVariant
  $size: ButtonSize
  $inverted?: boolean
}

const primaryStyles = css<StyledRootProps>`
  border: 1px solid ${({ $inverted }) => ($inverted ? colorBg : colorText)};
  background-color: ${({ $inverted }) => ($inverted ? colorBg : colorText)};
  color: ${({ $inverted }) => ($inverted ? colorText : colorBg)};
  box-shadow: ${shadowMd};

  &:hover {
    box-shadow: ${shadowLg};
  }
`

const secondaryStyles = css<StyledRootProps>`
  border: 1px solid ${({ $inverted }) => ($inverted ? colorTextInverted : colorText)};
  background-color: transparent;
  color: ${({ $inverted }) => ($inverted ? colorTextInverted : colorText)};

  &:hover {
    background-color: ${({ $inverted }) => ($inverted ? colorTextInverted : colorText)};
    color: ${({ $inverted }) => ($inverted ? colorBgInverted : colorBg)};
  }
`

const StyledRoot = styled.button<StyledRootProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${space2};
  height: ${({ $size }) => ($size === "icon" ? "36px" : "48px")};
  width: ${({ $size }) => ($size === "icon" ? "36px" : "auto")};
  padding: ${({ $size }) => ($size === "icon" ? "0" : `0 ${space5}`)};
  overflow: hidden;
  font-family: ${fontSans};
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  transition: box-shadow ${transitionBase}, border-color ${transitionBase},
    background-color ${transitionBase}, color ${transitionBase};

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 1px solid ${colorAccent};
    outline-offset: 2px;
  }

  ${({ $variant }) => ($variant === "primary" ? primaryStyles : secondaryStyles)}
`

const StyledGoldLayer = styled.span`
  position: absolute;
  inset: 0;
  background-color: ${colorAccent};
  transform: translateX(-100%);
  transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;

  ${StyledRoot}:hover & {
    transform: translateX(0);
  }
`

const StyledContent = styled.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: ${space2};
`

type ButtonProps<E extends React.ElementType> = {
  as?: E
  variant?: ButtonVariant
  size?: ButtonSize
  $inverted?: boolean
  children: ReactNode
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "children">

// Cast to `any` here: styled-components' polymorphic `as` prop combined with a
// generic component makes the JSX overload resolution too strict to be worth
// fighting for a small internal primitive.
const PolymorphicRoot = StyledRoot as any

function Button<E extends React.ElementType = "button">({
  as,
  variant = "primary",
  size = "default",
  $inverted,
  children,
  ...rest
}: ButtonProps<E>) {
  return (
    <PolymorphicRoot as={as} $variant={variant} $size={size} $inverted={$inverted} {...rest}>
      {variant === "primary" && <StyledGoldLayer />}
      <StyledContent>{children}</StyledContent>
    </PolymorphicRoot>
  )
}

export default Button
