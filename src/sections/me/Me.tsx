import React, { useEffect, useState, useRef, useMemo, ReactNode } from "react"
import { FiSend } from "react-icons/fi"
import { data } from "data"
import { useSprings, a } from "@react-spring/web"
import styled, { css } from "styled-components"
import Overline from "components/Overline"
import Button from "components/Button"
import { usePrefersReducedMotion } from "helpers/hooks"
import {
  colorBg,
  colorBorder,
  colorText,
  colorTextMuted,
  colorAccent,
  containerStyles,
  fontSerif,
  fontSans,
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
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: ${space6};

  @media screen and (max-width: ${tabletMax}) {
    grid-template-columns: 1fr;
    gap: ${space5};
  }
`

const StyledHeading = styled.h2`
  font-family: ${fontSerif};
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 400;
  color: ${colorText};
  margin: 0 0 ${space4} 0;
`

const StyledBio = styled.div`
  color: ${colorTextMuted};
  line-height: 1.625;
  font-size: 0.75rem;

  a {
    color: ${colorAccent};
    text-decoration: none;
    font-weight: 500;

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

const StyledFirstParagraph = styled(StyledBioParagraph)`
  &::first-letter {
    font-family: ${fontSerif};
    font-size: 3.5em;
    line-height: 0.8;
    float: left;
    margin-right: ${space2};
    color: ${colorText};
  }
`

const StyledDivider = styled.div`
  border: none;
  border-top: 1px solid ${colorBorder};
  margin: ${space6} 0;
`

const StyledFormLabel = styled.label`
  display: block;
  font-family: ${fontSans};
  font-size: 0.6375rem;
  color: ${colorTextMuted};
  margin-bottom: ${space2};
`

const StyledFormGroup = styled.div`
  margin-bottom: ${space4};
`

const inputStyles = css`
  width: 100%;
  padding: ${space2} 0;
  border: none;
  border-bottom: 1px solid rgba(26, 26, 26, 0.3);
  border-radius: 0;
  background-color: transparent;
  font-family: ${fontSans};
  font-size: 0.75rem;
  color: ${colorText};
  outline: none;
  transition: border-color ${transitionBase};
  appearance: none;

  &:focus {
    border-color: ${colorAccent};
  }

  &::placeholder {
    font-family: ${fontSerif};
    font-style: italic;
    color: ${colorTextMuted};
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

// Skills
const StyledSkillsColumn = styled.div``

const StyledSkillGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space3};
  margin-top: ${space5};
`

const StyledSkillRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${space4};
`

const StyledSkillName = styled.div`
  font-size: 0.75rem;
  color: ${colorText};
  flex: 0 0 130px;
`

const StyledSkillBarTrack = styled.div`
  position: relative;
  flex: 1;
  height: 1px;
  background-color: ${colorBorder};
`

const StyledSkillBarFill = styled(a.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${colorText};

  &::after {
    content: "";
    position: absolute;
    right: -2px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background-color: ${colorAccent};
  }
`

const Me = () => {
  const [inView, setInView] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

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

  const skillBarSprings = useSprings(
    orderedSkills.length,
    orderedSkills.map((skill, index) => ({
      width: inView ? `${skill.amount}%` : "0%",
      delay: inView ? index * 60 : 0,
      config: { duration: 900 },
      immediate: prefersReducedMotion,
    })),
  )

  return (
    <StyledRoot>
      <StyledContainer>
        <StyledGrid>
          {/* Left column: About + Form */}
          <div>
            <Overline>About</Overline>
            <StyledHeading>Tâm-Tanguy Tran</StyledHeading>
            <StyledBio>
              <StyledFirstParagraph>
                I'm a Software Engineer at{" "}
                <SpecialLink href="https://front.com/">Front</SpecialLink>, where I've
                been working since 2021 — starting as an intern before joining full-time.
              </StyledFirstParagraph>
              <StyledBioParagraph>
                I graduated from{" "}
                <SpecialLink href="https://www.epita.fr/">EPITA</SpecialLink>, a French
                engineering and computer science school, as part of the{" "}
                <SpecialLink href="https://www.epita.fr/nos-formations/diplome-ingenieur/cycle-ingenieur/les-majeures/#majeure-MTI">
                  MTI
                </SpecialLink>{" "}
                class (Multimedia and Information Technology).
              </StyledBioParagraph>
              <StyledBioParagraph>
                Before Front, I interned at and then freelanced for{" "}
                <SpecialLink href="https://makemereach.com/">MakeMeReach</SpecialLink> as
                a Full Stack Engineer.
              </StyledBioParagraph>
              <StyledBioParagraph>
                During my studies at EPITA, I also taught first-year students the basics
                of programming, particularly in OCaml and C#.
              </StyledBioParagraph>
            </StyledBio>

            <StyledDivider />

            <Overline>Contact</Overline>
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
              <Button as="button" type="submit" variant="primary">
                Send
                <FiSend />
              </Button>
            </form>
          </div>

          {/* Right column: Skills */}
          <StyledSkillsColumn ref={skillsRef}>
            <Overline>Expertise</Overline>
            <StyledHeading>Skills</StyledHeading>
            <StyledSkillGrid>
              {orderedSkills.map((skill, index) => (
                <StyledSkillRow key={skill.name}>
                  <StyledSkillName>{skill.name}</StyledSkillName>
                  <StyledSkillBarTrack>
                    <StyledSkillBarFill style={{ width: skillBarSprings[index].width }} />
                  </StyledSkillBarTrack>
                </StyledSkillRow>
              ))}
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
