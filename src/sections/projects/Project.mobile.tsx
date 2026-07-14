import React, { useState, useEffect } from "react"

import { a, useSprings } from "@react-spring/web"

import CardMobile from "./card-mobile/CardMobile"
import { data } from "data"
import { useDrag } from "@use-gesture/react"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import styled from "styled-components"
import Overline from "components/Overline"
import Button from "components/Button"
import { usePrefersReducedMotion } from "helpers/hooks"
import { colorBg, colorText, fontSerif, containerStyles, space2, space3, space5 } from "styles/globals"

const trigger = 80
const maxElements = 2

const StyledRoot = styled.div`
  padding: ${space5} 0;
  overflow-x: hidden;
  max-width: 100vw;
  background-color: ${colorBg};
`

const StyledContainer = styled.div`
  ${containerStyles}
`

const StyledTitle = styled.div`
  font-family: ${fontSerif};
  color: ${colorText};
  font-weight: 400;
  font-size: 1.5rem;
`

const StyledNavigation = styled.div`
  position: relative;
  height: 50px;
  margin-top: ${space3};
  display: flex;
  gap: ${space2};
`

const StyledProjects = styled.div`
  position: relative;
  height: 500px;
  margin-top: ${space5};
`

const ProjectMobile = () => {
  const [position, setPosition] = useState(0)
  const [showTips, setShowTips] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [springs, set] = useSprings(data.projects.length, index => ({
    top: index < maxElements + 1 ? index * 30 : 0,
    scale: index < maxElements + 1 ? `scale(${1 - index * 0.1})` : `scale(1)`,
    opacity: index < 2 ? 1 : 0,
    x: 0,
  }))

  useEffect(() => {
    if (!showTips || prefersReducedMotion) {
      return
    }

    const tipsInterval = setInterval(async () => {
      await set.start(index => {
        if (index === 0) {
          return {
            x: 70,
          }
        } else {
          return {}
        }
      })
      set.start(index => {
        if (index === 0) {
          return {
            x: 0,
          }
        } else {
          return {}
        }
      })
    }, 8000)

    return () => {
      clearInterval(tipsInterval)
    }
  }, [set, showTips, prefersReducedMotion])

  useEffect(() => {
    if (position >= data.projects.length) {
      setPosition(0)
    } else if (position < 0) {
      setPosition(data.projects.length - 1)
    }
  }, [position])

  const bind = useDrag(({ args: [index], movement: [x], dragging }) => {
    if (Math.abs(x) > trigger && showTips) {
      setShowTips(false)
    }
    if (position !== index) {
      return
    }
    set(indexP => {
      if (indexP === index) {
        if (!dragging) {
          if (Math.abs(x) > trigger) {
            setPosition(position + 1)
            return { x: x * 2 }
          }
          return { x: 0 }
        }
        if (Math.abs(x) < 20) {
          return { x: 0 }
        }
        if (Math.abs(x) > trigger) {
          const haptic = 50
          if (x < 0) {
            return { x: x - haptic }
          } else {
            return { x: x + haptic }
          }
        }
        return { x }
      }
      return {}
    })
  })

  useEffect(() => {
    if (position !== 0) {
      setShowTips(false)
    }
    set.start(index => {
      const currentPosition = index - position
      const shouldHandleAnimation =
        currentPosition >= -1 && currentPosition < maxElements + 1

      return {
        top: shouldHandleAnimation ? currentPosition * 30 : 0,
        scale: shouldHandleAnimation ? `scale(${1 - currentPosition * 0.1})` : `scale(1)`,
        opacity: currentPosition >= 0 && currentPosition < maxElements ? 1 : 0,
        x: currentPosition >= 0 && currentPosition < maxElements ? 0 : undefined,
        display: shouldHandleAnimation ? "block" : "none",
      }
    })
  }, [position, set])

  return (
    <StyledRoot>
      <StyledContainer>
        <Overline>Work</Overline>
        <StyledTitle>Projects</StyledTitle>
        <StyledNavigation>
          <Button variant="secondary" size="icon" onClick={() => setPosition(position - 1)}>
            <FiArrowLeft />
          </Button>
          <Button variant="secondary" size="icon" onClick={() => setPosition(position + 1)}>
            <FiArrowRight />
          </Button>
        </StyledNavigation>
        <StyledProjects>
          {data.projects.map((project, pos) => {
            const currentPosition = pos - position
            const isVisible = currentPosition >= 0 && currentPosition < 2

            return (
              <a.div
                key={project.name}
                {...bind(pos)}
                style={{
                  top: springs[pos].top,
                  zIndex: data.projects.length - currentPosition,
                  opacity: springs[pos].opacity,
                  transform: springs[pos].scale,
                  pointerEvents: isVisible ? "initial" : "none",
                  x: springs[pos].x,
                  position: "absolute",
                  touchAction: "none",
                }}
              >
                <CardMobile project={project} />
              </a.div>
            )
          })}
        </StyledProjects>
      </StyledContainer>
    </StyledRoot>
  )
}

export default ProjectMobile
