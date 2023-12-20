import React, { useEffect, useState, useRef, useMemo, ReactNode } from "react"
import { FiUser, FiSend } from "react-icons/fi"
import { data } from "data"
import styled, { css } from "styled-components"
import {
  backgroundSoft,
  backgroundSoftTransparent,
  primary,
  shadow,
  shadow05,
  tabletMax,
} from "styles/globals"

const StyledRoot = styled.div`
  background-color: ${backgroundSoftTransparent};
  padding: 140px 10px;
`

const StyledMeCard = styled.div`
  ${shadow}
  border: 1px solid transparentize($color: $primary, $amount: 0.9);
  margin: 0 20px 0 0;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;

  @media screen and (max-width: ${tabletMax}) {
    margin: 0;
  }
`

const StyledHeaderCard = styled.div`
  background-color: ${backgroundSoftTransparent};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  border-bottom: 1px solid rgba(0, 93, 169, 0.1);
`

const StyledIconUser = styled.div`
  margin-right: 30px;
  font-size: 30px;
  color: ${primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledTitleUser = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${primary};
`

const StyledContentCard = styled.div`
  background-color: white;
  display: flex;
  align-items: flex-end;
  padding: 50px 40px 40px 35px;
  overflow-x: scroll;
`

const StyledMe = styled.div`
  border-radius: 999px;
  background-color: ${primary};
  padding: 5px;
`

const meSize = "35px"

const StyledMeInside = styled.div`
  border-radius: 999px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${meSize};
  width: ${meSize};
  color: ${primary};
  font-weight: 800;
  font-size: 1.1rem;
`

const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`

const messageStyles = css`
  background-color: ${backgroundSoft};
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  min-height: 35px;
  display: flex;
  align-items: center;
`

const StyledMessageTop = styled.div`
  ${messageStyles}
  text-transform: uppercase;
  padding-right: 40px;
  border-radius: 25px 25px 25px 5px;
  color: $primary;
  font-weight: 800;
`

const StyledMessageMiddle = styled.div`
  ${messageStyles}
  margin-top: 5px;
  border-radius: 5px 25px 25px 5px;
`

const StyledMessageBottom = styled.div`
  ${messageStyles}
  display: block;
  margin-top: 5px;
  border-radius: 5px 25px 25px 25px;
  align-self: flex-start;

  a {
    color: ${primary};
    font-weight: 800;

    &:hover {
      text-decoration: underline;
      color: ${primary};
    }
  }
`

const StyledMessageTag = styled.div`
  background-color: ${primary};
  white-space: nowrap;
  color: white;
  margin-right: 10px;
  border-radius: 999px;
  padding: 2px 10px;

  &:last-child {
    margin-right: 0;
  }
`

const StyledFooterCard = styled.div`
  background-color: ${backgroundSoftTransparent};
  padding: 20px 40px;
  border-top: 1px solid rgba(0, 93, 169, 0.1);
`

const inputHeight = 35

const StyledInputDiv = styled.div`
  position: relative;

  input,
  textarea {
    background-color: white;
    outline: none;
    border: 1px solid rgba(0, 93, 169, 0.1);
    width: 100%;
    padding: 3px 15px;
    border-radius: 17.5px;
    height: ${inputHeight}px;
    min-height: ${inputHeight}px;
    margin-top: 5px;
  }

  textarea {
    padding: 9px 15px;
    max-width: 100%;
    min-width: 100%;
    height: ${2 * inputHeight}px;
  }
`

const StyledSendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledSend = styled.button`
  display: block;
  border: 0;
  color: white;
  background-color: ${primary};
  line-height: 1;
  height: ${inputHeight - 10}px;
  display: flex;
  align-items: center;
  border-radius: 999px;
  padding: 2px 10px;
`

const StyledMessageSend = styled.div`
  margin-right: 10px;
`

const StyledSkills = styled.div`
  padding: 20px 10px;
`

const StyledTitleSkills = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${primary};
`

const StyledSkillName = styled.div`
  background-color: ${backgroundSoft};
  border-radius: 999px;
  padding: 2px 15px;
  color: ${primary};
`

const StyledSkillsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
`

const StyledSkillItem = styled.div`
  ${shadow05}
  border-radius: 999px;
  background-color: white;
  margin-top: 10px;
  padding: 5px 7px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  transition: width 1.5s;
  white-space: nowrap;
  border: 1px solid rgba(0, 93, 169, 0.1);

  &:first-child {
    margin-top: 0;
  }

  &.active {
    background-color: ${primary};

    ${StyledSkillName} {
      color: white;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`

const Me = () => {
  const [isInView, setIsInView] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  const orderedSkills = useMemo(() => {
    return [...data.skills].sort((a, b) => b.amount - a.amount)
  }, [])

  const offsetDiv = useMemo(() => {
    let offsetDiv = 0
    let elementTop: any = divRef.current

    while (elementTop) {
      offsetDiv += elementTop.offsetTop
      elementTop = elementTop.offsetParent
    }
    return offsetDiv || 1000
  }, [divRef])

  useEffect(() => {
    if (isInView) {
      return
    }

    const handleIsInView = () => {
      if (!divRef.current) {
        return
      }
      const scrollPosition = window.scrollY + (window.innerHeight - 300)

      if (offsetDiv < scrollPosition) {
        setIsInView(true)
      }
    }

    handleIsInView()
    window.addEventListener("scroll", handleIsInView, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleIsInView)
    }
  }, [isInView, divRef, offsetDiv])

  return (
    <StyledRoot>
      <div className="container">
        <div className="columns is-desktop">
          <div className="column is-6-desktop">
            <StyledMeCard>
              <StyledHeaderCard>
                <StyledIconUser>
                  <FiUser />
                </StyledIconUser>
                <StyledTitleUser>Who am I?</StyledTitleUser>
              </StyledHeaderCard>
              <StyledContentCard>
                <StyledMe>
                  <StyledMeInside>TT</StyledMeInside>
                </StyledMe>
                <StyledMessages>
                  <StyledMessageTop>Tâm-Tanguy Tran</StyledMessageTop>
                  <StyledMessageMiddle>
                    <StyledMessageTag>French student</StyledMessageTag>
                    <StyledMessageTag>Computer science</StyledMessageTag>
                  </StyledMessageMiddle>
                  <StyledMessageMiddle>
                    <StyledMessageTag>EPITA School</StyledMessageTag>
                  </StyledMessageMiddle>
                  <StyledMessageBottom>
                    I'm a student at{" "}
                    <SpecialLink href="https://www.epita.fr/">EPITA</SpecialLink> , a
                    french engineering and computer science focused school. I'm part of
                    the{" "}
                    <SpecialLink href="https://www.epita.fr/nos-formations/diplome-ingenieur/cycle-ingenieur/les-majeures/#majeure-MTI">
                      MTI
                    </SpecialLink>{" "}
                    class. I'm learning at school programing and algorithms basics to
                    advanced concepts in web technologies, C / C++, Linux, AI... <br />
                    Aside from my academic courses I'm learning some web technologies,
                    like TypeScript / JavaScript with Node.js, React.js and Vue.js,
                    Docker, Kubernetes, cloud providers (Google Cloud Engine, Amazon Web
                    Services and Microsoft Azure), and other web basics (HTML, CSS, PHP,
                    MySQL / MariaDB, MongoDB).
                    <br />
                    During my third year, I taught first-year students the basics of
                    programming, particularly in OCaml and C#.
                    <br />
                    I'm working as a freelancer aside of EPITA for{" "}
                    <SpecialLink href="https://makemereach.com/">MakeMeReach</SpecialLink>
                    , the company where I did my fourth year insternship.
                  </StyledMessageBottom>
                </StyledMessages>
              </StyledContentCard>
              <StyledFooterCard>
                <form
                  method="POST"
                  name="fa-form-1"
                  action="https://webhook.frontapp.com/forms/sean_test_3_30/UP11od99tgc3bLn3olHRtBQzVOks1SUHHzYrmkN4XgZajeRRVgkXfpCJH50vwrfOOHPrxjeF9pG5p49a0M3T3ibr6jPRKdro-HuS-tPOecG_T1X-FkQ"
                  encType="multipart/form-data"
                  accept-charset="utf-8"
                >
                  <StyledInputDiv>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="body" placeholder="Message"></textarea>

                    <div id="html_element"></div>
                    <StyledSendContainer>
                      <StyledSend type="submit">
                        <StyledMessageSend>Send</StyledMessageSend>
                        <FiSend />
                      </StyledSend>
                    </StyledSendContainer>
                  </StyledInputDiv>
                </form>
              </StyledFooterCard>
            </StyledMeCard>
          </div>
          <div className="column is-6-desktop">
            <StyledSkills>
              <StyledTitleSkills>Skills</StyledTitleSkills>
              <StyledSkillsList ref={divRef}>
                {orderedSkills.map((skill, index) => (
                  <StyledSkillItem
                    key={skill.name}
                    className={`${index < 3 ? "active" : ""}`}
                    style={{
                      width: `${isInView ? skill.amount : 0}%`,
                    }}
                  >
                    <StyledSkillName>{skill.name}</StyledSkillName>
                  </StyledSkillItem>
                ))}
              </StyledSkillsList>
            </StyledSkills>
          </div>
        </div>
      </div>
    </StyledRoot>
  )
}

const SpecialLink: React.FC<{ href?: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default Me
