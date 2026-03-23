import React from "react"
import { Project } from "types"
import { FiExternalLink } from "react-icons/fi"
import styled from "styled-components"
import {
  colorBg,
  colorBorder,
  colorText,
  colorTextMuted,
  colorAccent,
  space2,
  space3,
  transitionBase,
} from "styles/globals"

interface props {
  project: Project
}

const StyledCard = styled.div`
  border: 1px solid ${colorBorder};
  background-color: ${colorBg};
  min-height: 400px;
  overflow: hidden;
  position: relative;
`

const StyledPicture = styled.div`
  object-fit: contain;
  max-height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    display: block;
  }
`

const StyledContent = styled.div`
  padding: ${space3};
`

const StyledProjectName = styled.div`
  color: ${colorText};
  font-size: 1.2rem;
  font-weight: 800;
`

const StyledTags = styled.div`
  margin-top: ${space3};
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const StyledTag = styled.div`
  white-space: nowrap;
  color: ${colorTextMuted};
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  font-variant: all-small-caps;
`

const StyledDescription = styled.div`
  margin-top: ${space2};
  color: ${colorTextMuted};
  line-height: 1.6;
`

const StyledLink = styled.a`
  position: absolute;
  right: 12px;
  top: 12px;
  text-decoration: none;
`

const StyledLinkElm = styled.div`
  background-color: ${colorAccent};
  border: 1px solid ${colorAccent};
  padding: 6px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  color: ${colorBg};
  font-size: 0.9rem;
  transition: background-color ${transitionBase}, color ${transitionBase};

  &:hover {
    background-color: transparent;
    color: ${colorAccent};
  }
`

const CardMobile: React.FC<props> = ({ project }) => {
  return (
    <StyledCard>
      {project.picture && (
        <StyledPicture>
          <img src={project.picture} alt={`${project.name} illustration`} />
        </StyledPicture>
      )}
      <StyledContent>
        <StyledProjectName>{project.name}</StyledProjectName>
        <StyledTags>
          {project.tags.map(tag => (
            <StyledTag key={tag}>{tag}</StyledTag>
          ))}
        </StyledTags>
        <StyledDescription>{project.description}</StyledDescription>
        {project.link && (
          <StyledLink target="_blank" href={project.link} rel="noopener noreferrer">
            <StyledLinkElm>
              View project
              <FiExternalLink />
            </StyledLinkElm>
          </StyledLink>
        )}
      </StyledContent>
    </StyledCard>
  )
}

export default CardMobile
