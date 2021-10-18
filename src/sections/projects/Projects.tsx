import React, { useState } from "react"
import background from "./Background.png"
import { data } from "data"
import { FiFolder, FiExternalLink } from "react-icons/fi"
import { Project } from "types"
import ImgFocus from "./img-focus/ImgFocus"
import ProjectMobile from "./Project.mobile"
import styled, { css } from "styled-components"
import { primary, tabletMax } from "styles/globals"

const StyledLeft = styled.div`
  background-color: ${primary};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 100%;

  @media screen and (max-width: ${tabletMax}) {
    align-items: center;
  }
`

const StyledLeftContainer = styled.div`
  width: 400px;
  max-width: 400px;
  text-align: left;
  padding: 50px 0 200px 0;

  @media screen and (max-width: ${tabletMax}) {
    padding: 50px 50px 20px 20px;
    width: unset;
  }
`

const StyledTitle = styled.div`
  color: white;
  font-weight: 800;
  font-size: 1.3rem;
`

const StyledConversation = styled.div`
  margin: 100px 0 0 0;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: ${tabletMax}) {
    & {
      margin: 20px 0 0 0;
    }
  }
`

const nameSize = "40px"

const StyledName = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${nameSize};
  width: ${nameSize};
  border-radius: 999px;
  font-weight: 800;
  font-size: 1.1rem;
  color: ${primary};
  line-height: 1;
`

const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`

const messageStyles = css`
  color: white;
  padding: 7px 15px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 5px;
  min-width: 150px;
`

const StyledMessageTop = styled.div`
  ${messageStyles}
  border-radius: 25px 25px 25px 5px;
  font-weight: 800;
`

const StyledMessageBottom = styled.div`
  ${messageStyles}
  border-radius: 5px 25px 25px 25px;
  max-height: 250px;
  overflow-y: scroll;
  /* total width */
  &::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0);
    width: 7px;
  }

  /* background of the scrollbar except button or resizer */
  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0);
  }

  /* scrollbar itself */
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  /* set button(top and bottom of the scrollbar) */
  &::-webkit-scrollbar-button {
    display: none;
  }
`

const StyledProject = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 2px 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const StyledProjectName = styled.div`
  margin-left: 20px;
`

const StyledRight = styled.div`
  padding: 70px 10px 70px 70px;
  max-width: 550px;

  @media screen and (max-width: ${tabletMax}) {
    padding: 20px 50px 20px 50px;
    display: flex;
    justify-content: center;
    max-width: none;
  }
`

const StyledRightContainer = styled.div`
  display: flex;
  position: relative;
`

const StyledMessages2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 0;

  @media screen and (max-width: ${tabletMax}) {
    padding: 20px 0;
  }
`

const message2Styles = css`
  color: black;
  padding: 7px 20px;
  background-color: rgba(0, 0, 0, 0.05);
  margin-top: 5px;
  min-width: 150px;
  display: inline-flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  max-width: 350px;
`

const StyledTopMessage2 = styled.div`
  ${message2Styles}
  background-color: ${primary};
  color: white;
  font-weight: 800;
  border-radius: 25px 25px 25px 5px;
`

const StyledMiddleMessage2 = styled.div`
  ${message2Styles}
  border-radius: 5px 25px 25px 5px;
`

const StyledMessageBottom2 = styled.div`
  ${message2Styles}
  border-radius: 5px 25px 25px 25px;
`

const StyledPicture = styled.div`
  margin-top: 5px;
  cursor: pointer;

  overflow: hidden;
  border-radius: 5px 25px 25px 5px;
  border: 1px solid rgba(0, 93, 169, 0.1);
  max-height: 350px;
  max-width: 450px;

  > img {
    width: 100%;
  }
`

const StyledTag = styled.div`
  border-radius: 999px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 2px 15px;
  white-space: nowrap;
`

const StyledLink = styled.div`
  position: absolute;
  right: 10px;
`

const StyledLinkElm = styled.div`
  color: black;
  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 999px;
  padding: 7px 15px;
  display: flex;
  justify-content: center;
  line-height: 1;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const StyledLinkName = styled.div`
  margin-right: 20px;
  white-space: nowrap;
`

const Projects = () => {
  const [project, setProject] = useState<Project>(data.projects[0])
  const [openFocus, setOpenFocus] = useState(false)
  const [focusImg, setFocusImg] = useState<string | undefined>()

  if (window.innerWidth <= 1023) {
    return <ProjectMobile />
  }

  return (
    <div>
      <ImgFocus
        isOpen={openFocus}
        imgUrl={focusImg}
        onClose={() => setOpenFocus(false)}
      />
      <div className="columns is-multiline">
        <div className="column is-12-tablet is-6-desktop is-5-fullhd is-5-widescreen">
          <StyledLeft style={{ backgroundImage: `url(${background})` }}>
            <StyledLeftContainer>
              <StyledTitle>Projects</StyledTitle>
              <StyledConversation>
                <StyledName>TT</StyledName>
                <StyledMessages>
                  <StyledMessageTop>
                    Which project would you like to see?
                  </StyledMessageTop>
                  <StyledMessageBottom>
                    {data.projects.map(project => (
                      <StyledProject
                        key={project.name}
                        onClick={() => setProject(project)}
                      >
                        <FiFolder fill="white" />
                        <StyledProjectName>{project.name}</StyledProjectName>
                      </StyledProject>
                    ))}
                  </StyledMessageBottom>
                </StyledMessages>
              </StyledConversation>
            </StyledLeftContainer>
          </StyledLeft>
        </div>
        <div className="column">
          <StyledRight>
            <StyledRightContainer>
              <StyledMessages2>
                <StyledTopMessage2>{project.name}</StyledTopMessage2>
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
                  <StyledMiddleMessage2>
                    {project.tags.map(tag => (
                      <StyledTag key={tag}>{tag}</StyledTag>
                    ))}
                  </StyledMiddleMessage2>
                )}
                <StyledMessageBottom2>{project.description}</StyledMessageBottom2>
              </StyledMessages2>
              {project.link && (
                <StyledLink>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <StyledLinkElm>
                      <StyledLinkName>View project</StyledLinkName>
                      <FiExternalLink />
                    </StyledLinkElm>
                  </a>
                </StyledLink>
              )}
            </StyledRightContainer>
          </StyledRight>
        </div>
      </div>
    </div>
  )
}

export default Projects
