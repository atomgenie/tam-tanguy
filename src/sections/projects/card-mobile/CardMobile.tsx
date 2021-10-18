import React from "react"

import { Project } from "types"
import { FiExternalLink } from "react-icons/fi"
import styled from "styled-components"
import { primary, shadow } from "styles/globals"

interface props {
  project: Project
}

const StyledCard = styled.div`
  ${shadow}
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  background-color: white;
  min-height: 400px;
  overflow: hidden;
  position: relative;
`

const StyledPicture = styled.div`
  object-fit: contain;
  max-height: 300px;
  overflow: hidden;
`

const StyledContent = styled.div`
  padding: 25px 25px;
`

const StyledProjectName = styled.div`
  color: ${primary};
  font-size: 1.2rem;
  font-weight: 800;
`

const StyledTags = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

const StyledRag = styled.div`
  white-space: nowrap;
  border-radius: 999px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 2px 15px;
`

const StyledDescription = styled.div`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.8);
`

const StyledLink = styled.a`
  position: absolute;
  right: 10px;
  top: 10px;
`

const StyledLinkElm = styled.div`
  color: black;
  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  padding: 7px 15px;
  display: flex;
  justify-content: center;
  line-height: 1;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const StyledLinkName = styled.div`
  margin-right: 20px;
  white-space: nowrap;
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
            <StyledRag key={tag}>{tag}</StyledRag>
          ))}
        </StyledTags>
        <StyledDescription>{project.description}</StyledDescription>
        {project.link && (
          <StyledLink target="_blank" href={project.link} rel="noopener noreferrer">
            <StyledLinkElm>
              <StyledLinkName>View project</StyledLinkName>
              <FiExternalLink />
            </StyledLinkElm>
          </StyledLink>
        )}
      </StyledContent>
    </StyledCard>
  )
}

export default CardMobile
