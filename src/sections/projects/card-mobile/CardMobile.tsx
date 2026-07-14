import React from "react"
import { Project } from "types"
import { FiExternalLink } from "react-icons/fi"
import styled from "styled-components"
import Button from "components/Button"
import { colorBg, colorBorder, colorText, colorTextMuted, fontSerif, space2, space3 } from "styles/globals"

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
    filter: grayscale(1);
  }
`

const StyledContent = styled.div`
  padding: ${space3};
`

const StyledProjectName = styled.div`
  font-family: ${fontSerif};
  color: ${colorText};
  font-size: 1.125rem;
  font-weight: 400;
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
  font-size: 0.6rem;
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
            <Button as="span" variant="primary" size="default">
              View project
              <FiExternalLink />
            </Button>
          </StyledLink>
        )}
      </StyledContent>
    </StyledCard>
  )
}

export default CardMobile
