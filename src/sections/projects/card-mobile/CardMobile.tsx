import React from "react"

import styles from "./CardMobile.module.scss"
import { Project } from "types"
import { FiExternalLink } from "react-icons/fi"

interface props {
  project: Project
}

const CardMobile: React.FC<props> = ({ project }) => {
  return (
    <div className={styles.card}>
      {project.picture && (
        <div className={styles.picture}>
          <img src={project.picture} alt={`${project.name} illustration`} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.projectName}>{project.name}</div>
        <div className={styles.tags}>
          {project.tags.map(tag => (
            <div className={styles.tag} key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className={styles.description}>{project.description}</div>
        {project.link && (
          <a
            className={styles.link}
            target="_blank"
            href={project.link}
            rel="noopener noreferrer"
          >
            <div className={styles.linkElm}>
              <div className={styles.linkName}>View project</div>
              <FiExternalLink />
            </div>
          </a>
        )}
      </div>
    </div>
  )
}

export default CardMobile
