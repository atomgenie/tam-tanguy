import React, { useState } from "react"
import styles from "./Projects.module.scss"
import background from "./Background.png"
import { data } from "data"
import { FiFolder, FiExternalLink } from "react-icons/fi"
import { Project } from "types"
import ImgFocus from "./img-focus/ImgFocus"
import ProjectMobile from "./Project.mobile"

export default () => {
  const [project, setProject] = useState<Project>(data.projects[0])
  const [openFocus, setOpenFocus] = useState(false)
  const [focusImg, setFocusImg] = useState<string | undefined>()

  if (window.innerWidth <= 1023) {
    return <ProjectMobile />
  }

  return (
    <div className={styles.root}>
      <ImgFocus
        isOpen={openFocus}
        imgUrl={focusImg}
        onClose={() => setOpenFocus(false)}
      />
      <div className="columns is-multiline">
        <div className="column is-12-tablet is-6-desktop is-5-fullhd is-5-widescreen">
          <div className={styles.left} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.leftContainer}>
              <div className={styles.title}>Projects</div>
              <div className={styles.conversation}>
                <div className={styles.name}>TT</div>
                <div className={styles.messages}>
                  <div className={styles.messageTop}>
                    Which project would you like to see?
                  </div>
                  <div className={styles.messageBottom}>
                    {data.projects.map(project => (
                      <div
                        key={project.name}
                        className={styles.project}
                        onClick={() => setProject(project)}
                      >
                        <FiFolder fill="white" />
                        <div className={styles.projectName}>{project.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className={styles.right}>
            <div className={styles.rightContainer}>
              <div className={styles.messages}>
                <div className={styles.topMessage}>{project.name}</div>
                {project.picture && (
                  <div className={styles.picture}>
                    <img
                      src={project.picture}
                      alt={`${project.name} illustration`}
                      onClick={() => {
                        setFocusImg(project.picture)
                        setOpenFocus(true)
                      }}
                    />
                  </div>
                )}
                {project.tags.length > 0 && (
                  <div className={styles.middleMessage}>
                    {project.tags.map(tag => (
                      <div key={tag} className={styles.tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
                <div className={styles.bottomMessage}>{project.description}</div>
              </div>
              {project.link && (
                <div className={styles.link}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className={styles.linkElm}>
                      <div className={styles.linkName}>View project</div>
                      <FiExternalLink />
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
