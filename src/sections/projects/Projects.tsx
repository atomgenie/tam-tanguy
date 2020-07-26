import React, { useState } from "react"
import styles from "./Projects.module.scss"
import background from "./Background.png"
import { data } from "data"
import { FiFolder, FiExternalLink } from "react-icons/fi"
import { Project } from "types"

export default () => {
    const [project, setProject] = useState<Project>(data.projects[0])

    return (
        <div className={styles.root}>
            <div className="columns">
                <div className="column is-5">
                    <div
                        className={styles.left}
                        style={{ backgroundImage: `url(${background})` }}
                    >
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
                                                <div className={styles.projectName}>
                                                    {project.name}
                                                </div>
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
                                {project.tags.length > 0 && (
                                    <div className={styles.middleMessage}>
                                        {project.tags.map(tag => (
                                            <div key={tag} className={styles.tag}>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className={styles.bottomMessage}>
                                    {project.description}
                                </div>
                            </div>
                            {project.link && (
                                <div className={styles.link}>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className={styles.linkElm}>
                                            <div className={styles.linkName}>
                                                View project
                                            </div>
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
