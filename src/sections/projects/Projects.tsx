import React, { useState } from "react"
import { data } from "data"
import { FiExternalLink } from "react-icons/fi"
import { Project } from "types"
import ImgFocus from "./img-focus/ImgFocus"
import ProjectMobile from "./Project.mobile"
import styled from "styled-components"
import { useSpring, a } from "@react-spring/web"
import {
  colorBg,
  colorBorder,
  colorText,
  colorTextMuted,
  colorAccent,
  containerStyles,
  space2,
  space3,
  space4,
  space5,
  space6,
  transitionBase,
  tabletMax,
} from "styles/globals"

const StyledRoot = styled.div`
  background-color: ${colorBg};
  padding: ${space6} 0;
`

const StyledContainer = styled.div`
  ${containerStyles}
`

const StyledLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${colorTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${space2};
`

const StyledTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${colorText};
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
  border: 1px solid ${colorBorder};
  overflow: hidden;
`

interface ProjectItemProps {
  $active: boolean
}

const StyledProjectItem = styled.div<ProjectItemProps>`
  padding: 10px ${space3};
  cursor: pointer;
  border-left: 2px solid ${({ $active }) => ($active ? colorAccent : "transparent")};
  background-color: ${colorBg};
  color: ${colorText};
  transition: border-left-color ${transitionBase};
  border-bottom: 1px solid ${colorBorder};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    border-left-color: ${colorAccent};
  }
`

const StyledProjectItemName = styled.div<{ $active: boolean }>`
  font-size: 1rem;
  font-weight: ${({ $active }) => ($active ? "800" : "400")};
`

const StyledDetail = styled(a.div)`
  padding: ${space4} 0;
`

const StyledProjectName = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${colorText};
  margin: 0 0 ${space3} 0;
`

const StyledPicture = styled.div`
  margin-bottom: ${space3};
  overflow: hidden;
  border: 1px solid ${colorBorder};
  max-width: 500px;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
    transition: opacity ${transitionBase};

    &:hover {
      opacity: 0.9;
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
  color: ${colorTextMuted};
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  font-variant: all-small-caps;
  padding: 0;
`

const StyledDescription = styled.p`
  color: ${colorTextMuted};
  line-height: 1.7;
  margin: 0 0 ${space3} 0;
  max-width: 520px;
`

const StyledLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background-color: ${colorAccent};
  color: ${colorBg};
  border: 1px solid ${colorAccent};
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color ${transitionBase}, color ${transitionBase};

  &:hover {
    background-color: transparent;
    color: ${colorAccent};
  }
`

const Projects = () => {
  const [project, setProject] = useState<Project>(data.projects[0])
  const [openFocus, setOpenFocus] = useState(false)
  const [focusImg, setFocusImg] = useState<string | undefined>()

  const fadeIn = useSpring({
    key: project.name,
    from: { opacity: 0, transform: "translateY(8px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 25 },
    reset: true,
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
        <StyledLabel>Work</StyledLabel>
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
                  onClick={() => {
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
              <StyledLinkButton href={project.link} target="_blank" rel="noopener noreferrer">
                View project
                <FiExternalLink />
              </StyledLinkButton>
            )}
          </StyledDetail>
        </StyledGrid>
      </StyledContainer>
    </StyledRoot>
  )
}

export default Projects
