import React, { useState } from "react"
import { data } from "data"
import { FiExternalLink } from "react-icons/fi"
import { Project } from "types"
import ImgFocus from "./img-focus/ImgFocus"
import ProjectMobile from "./Project.mobile"
import styled from "styled-components"
import { useSpring, a, easings } from "@react-spring/web"
import Overline from "components/Overline"
import Button from "components/Button"
import { usePrefersReducedMotion } from "helpers/hooks"
import {
  colorBgInverted,
  colorTextInverted,
  colorTextInvertedMuted,
  colorAccent,
  containerStyles,
  fontSerif,
  space2,
  space3,
  space4,
  space5,
  space6,
  transitionBase,
  transitionFast,
  transitionImage,
  shadowSm,
  shadowMd,
} from "styles/globals"

const invertedBorder = "rgba(249, 248, 246, 0.16)"

const StyledRoot = styled.div`
  background-color: ${colorBgInverted};
  padding: ${space6} 0;
`

const StyledContainer = styled.div`
  ${containerStyles}
`

const StyledTitle = styled.h2`
  font-family: ${fontSerif};
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 400;
  color: ${colorTextInverted};
  margin: 0 0 ${space5} 0;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: ${space5};
  align-items: flex-start;
`

const StyledProjectList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${invertedBorder};
  overflow: hidden;
`

interface ProjectItemProps {
  $active: boolean
}

const StyledProjectItem = styled.div<ProjectItemProps>`
  padding: 10px ${space3};
  cursor: pointer;
  border-left: 2px solid ${({ $active }) => ($active ? colorAccent : "transparent")};
  color: ${colorTextInverted};
  transition: border-left-color ${transitionBase};
  border-bottom: 1px solid ${invertedBorder};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    border-left-color: ${colorAccent};
  }
`

const StyledProjectItemName = styled.div<{ $active: boolean }>`
  font-size: 0.75rem;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
`

const StyledDetail = styled(a.div)`
  padding: ${space4} 0;
`

const StyledProjectName = styled.h3`
  font-family: ${fontSerif};
  font-size: 1.5rem;
  font-weight: 400;
  color: ${colorTextInverted};
  margin: 0 0 ${space3} 0;
`

const StyledPicture = styled.div`
  margin-bottom: ${space3};
  overflow: hidden;
  border: 1px solid ${invertedBorder};
  box-shadow: ${shadowSm};
  max-width: 500px;
  cursor: pointer;
  transition: box-shadow ${transitionFast};

  &:hover {
    box-shadow: ${shadowMd};
  }

  img {
    width: 100%;
    display: block;
    filter: grayscale(1);
    transition: filter ${transitionImage}, transform ${transitionImage};

    &:hover {
      filter: grayscale(0);
      transform: scale(1.05);
    }
  }
`

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: ${space3};
`

const StyledTag = styled.div`
  color: ${colorTextInvertedMuted};
  font-size: 0.6rem;
  letter-spacing: 0.06em;
  font-variant: all-small-caps;
  padding: 0;
`

const StyledDescription = styled.p`
  color: ${colorTextInvertedMuted};
  line-height: 1.625;
  margin: 0 0 ${space3} 0;
  max-width: 520px;
`

const Projects = () => {
  const [project, setProject] = useState<Project>(data.projects[0])
  const [openFocus, setOpenFocus] = useState(false)
  const [focusImg, setFocusImg] = useState<string | undefined>()
  const prefersReducedMotion = usePrefersReducedMotion()

  const fadeIn = useSpring({
    key: project.name,
    from: { opacity: 0, transform: "translateY(8px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 900, easing: easings.easeOutCubic },
    reset: true,
    immediate: prefersReducedMotion,
  })

  if (window.innerWidth <= 1023) {
    return <ProjectMobile />
  }

  return (
    <StyledRoot>
      <ImgFocus
        isOpen={openFocus}
        imgUrl={focusImg}
        onClose={() => setOpenFocus(false)}
      />
      <StyledContainer>
        <Overline $inverted>Work</Overline>
        <StyledTitle>Projects</StyledTitle>
        <StyledGrid>
          <StyledProjectList>
            {data.projects.map(p => (
              <StyledProjectItem
                key={p.name}
                $active={p.name === project.name}
                onClick={() => setProject(p)}
              >
                <StyledProjectItemName $active={p.name === project.name}>
                  {p.name}
                </StyledProjectItemName>
              </StyledProjectItem>
            ))}
          </StyledProjectList>

          <StyledDetail style={fadeIn}>
            <StyledProjectName>{project.name}</StyledProjectName>
            {project.picture && (
              <StyledPicture>
                <img
                  src={project.picture}
                  alt={`${project.name} illustration`}
                  draggable={false}
                  onClick={e => {
                    e.stopPropagation()
                    setFocusImg(project.picture)
                    setOpenFocus(true)
                  }}
                />
              </StyledPicture>
            )}
            {project.tags.length > 0 && (
              <StyledTags>
                {project.tags.map(tag => (
                  <StyledTag key={tag}>{tag}</StyledTag>
                ))}
              </StyledTags>
            )}
            <StyledDescription>{project.description}</StyledDescription>
            {project.link && (
              <Button as="a" href={project.link} target="_blank" rel="noopener noreferrer" variant="primary" $inverted>
                View project
                <FiExternalLink />
              </Button>
            )}
          </StyledDetail>
        </StyledGrid>
      </StyledContainer>
    </StyledRoot>
  )
}

export default Projects
