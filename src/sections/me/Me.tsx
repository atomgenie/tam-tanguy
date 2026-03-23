import React, { useEffect, useState, useRef, useMemo, ReactNode } from "react"
import { FiSend } from "react-icons/fi"
import { data } from "data"
import { useSprings, a } from "@react-spring/web"
import styled from "styled-components"
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

const StyledRoot = styled.section`
  background-color: ${colorBg};
  padding: ${space6} 0;
  border-top: 1px solid ${colorBorder};
  border-bottom: 1px solid ${colorBorder};
`

const StyledContainer = styled.div`
  ${containerStyles}
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${space6};

  @media screen and (max-width: ${tabletMax}) {
    grid-template-columns: 1fr;
    gap: ${space5};
  }
`

const StyledLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${colorTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${space2};
`

const StyledHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${colorText};
  margin: 0 0 ${space4} 0;
`

const StyledBio = styled.div`
  color: ${colorTextMuted};
  line-height: 1.8;
  font-size: 1rem;

  a {
    color: ${colorAccent};
    text-decoration: none;
    font-weight: 800;

    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledBioParagraph = styled.p`
  margin: 0 0 ${space3} 0;

  &:last-child {
    margin-bottom: 0;
  }
`

const StyledDivider = styled.div`
  border: none;
  border-top: 1px solid ${colorBorder};
  margin: ${space5} 0;
`

const StyledFormLabel = styled.label`
  display: block;
  font-size: 0.85rem;
  color: ${colorTextMuted};
  margin-bottom: 6px;
`

const StyledFormGroup = styled.div`
  margin-bottom: ${space3};
`

const inputStyles = `
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #D4D4D4;
  border-radius: 0;
  background-color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #0F0F0F;
  outline: none;
  transition: border-color 0.2s ease;
  appearance: none;

  &:focus {
    border-color: #6E56CF;
  }

  &::placeholder {
    color: #6B6B6B;
  }
`

const StyledInput = styled.input`
  ${inputStyles}
`

const StyledTextarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 100px;
`

const StyledSubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${space2};
  padding: 10px 20px;
  background-color: ${colorAccent};
  color: ${colorBg};
  border: 1px solid ${colorAccent};
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color ${transitionBase}, color ${transitionBase};

  &:hover {
    background-color: transparent;
    color: ${colorAccent};
  }
`

// Skills
const StyledSkillsColumn = styled.div``

const StyledSkillGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: ${space4};
`

const StyledSkillRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid ${colorBorder};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const StyledSkillName = styled.div`
  font-size: 1rem;
  color: ${colorText};
  flex: 1;
`

const StyledDots = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

interface DotProps {
  $filled: boolean
}

const StyledDot = styled(a.div)<DotProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ $filled }) => ($filled ? colorAccent : colorBorder)};
`

const Me = () => {
  const [inView, setInView] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  const orderedSkills = useMemo(() => {
    return [...data.skills].sort((a, b) => b.amount - a.amount)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.2 },
    )
    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, [])

  const dotSprings = useSprings(
    orderedSkills.length,
    orderedSkills.map((skill, index) => ({
      opacity: inView ? 1 : 0,
      delay: inView ? index * 60 : 0,
      config: { tension: 200, friction: 25 },
    })),
  )

  return (
    <StyledRoot>
      <StyledContainer>
        <StyledGrid>
          {/* Left column: About + Form */}
          <div>
            <StyledLabel>About</StyledLabel>
            <StyledHeading>Tâm-Tanguy Tran</StyledHeading>
            <StyledBio>
              <StyledBioParagraph>
                I'm a student at{" "}
                <SpecialLink href="https://www.epita.fr/">EPITA</SpecialLink>, a French
                engineering and computer science focused school. I'm part of the{" "}
                <SpecialLink href="https://www.epita.fr/nos-formations/diplome-ingenieur/cycle-ingenieur/les-majeures/#majeure-MTI">
                  MTI
                </SpecialLink>{" "}
                class. I'm learning programming and algorithms basics to advanced concepts
                in web technologies, C / C++, Linux, AI&hellip;
              </StyledBioParagraph>
              <StyledBioParagraph>
                Aside from my academic courses I'm learning web technologies — TypeScript
                / JavaScript with Node.js, React.js and Vue.js, Docker, Kubernetes, cloud
                providers (GCP, AWS, Azure), and other web basics (HTML, CSS, PHP,
                MySQL / MariaDB, MongoDB).
              </StyledBioParagraph>
              <StyledBioParagraph>
                During my third year, I taught first-year students the basics of
                programming, particularly in OCaml and C#.
              </StyledBioParagraph>
              <StyledBioParagraph>
                I'm working as a freelancer aside of EPITA for{" "}
                <SpecialLink href="https://makemereach.com/">MakeMeReach</SpecialLink>,
                the company where I did my fourth year internship.
              </StyledBioParagraph>
            </StyledBio>

            <StyledDivider />

            <StyledLabel>Contact</StyledLabel>
            <form
              method="POST"
              name="fa-form-1"
              action="https://webhook.frontapp.com/forms/sean_test_3_30/UP11od99tgc3bLn3olHRtBQzVOks1SUHHzYrmkN4XgZajeRRVgkXfpCJH50vwrfOOHPrxjeF9pG5p49a0M3T3ibr6jPRKdro-HuS-tPOecG_T1X-FkQ"
              encType="multipart/form-data"
              acceptCharset="utf-8"
            >
              <StyledFormGroup>
                <StyledFormLabel htmlFor="name">Name</StyledFormLabel>
                <StyledInput type="text" id="name" name="name" placeholder="Your name" />
              </StyledFormGroup>
              <StyledFormGroup>
                <StyledFormLabel htmlFor="email">Email</StyledFormLabel>
                <StyledInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                />
              </StyledFormGroup>
              <StyledFormGroup>
                <StyledFormLabel htmlFor="body">Message</StyledFormLabel>
                <StyledTextarea id="body" name="body" placeholder="Your message" />
              </StyledFormGroup>
              <div id="html_element"></div>
              <StyledSubmitButton type="submit">
                Send
                <FiSend />
              </StyledSubmitButton>
            </form>
          </div>

          {/* Right column: Skills */}
          <StyledSkillsColumn ref={skillsRef}>
            <StyledLabel>Expertise</StyledLabel>
            <StyledHeading>Skills</StyledHeading>
            <StyledSkillGrid>
              {orderedSkills.map((skill, index) => {
                const filledCount = Math.round(skill.amount / 20)
                return (
                  <StyledSkillRow key={skill.name}>
                    <StyledSkillName>{skill.name}</StyledSkillName>
                    <StyledDots>
                      {[1, 2, 3, 4, 5].map(dot => (
                        <StyledDot
                          key={dot}
                          $filled={dot <= filledCount}
                          style={dotSprings[index]}
                        />
                      ))}
                    </StyledDots>
                  </StyledSkillRow>
                )
              })}
            </StyledSkillGrid>
          </StyledSkillsColumn>
        </StyledGrid>
      </StyledContainer>
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
