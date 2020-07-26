import React from "react"
import styles from "./Me.module.scss"
import { FiUser, FiSend } from "react-icons/fi"
import { data } from "data"

export default () => {
    return (
        <div className={styles.root}>
            <div className="container">
                <div className="columns">
                    <div className="column is-6">
                        <div className={styles.meCard}>
                            <div className={styles.headerCard}>
                                <div className={styles.iconUser}>
                                    <FiUser />
                                </div>
                                <div className={styles.titleHeader}>Who am I?</div>
                            </div>
                            <div className={styles.contentCard}>
                                <div className={styles.me}>
                                    <div className={styles.meInside}>TT</div>
                                </div>
                                <div className={styles.messages}>
                                    <div className={styles.messageTop}>
                                        Tâm-Tanguy Tran
                                    </div>
                                    <div className={styles.messageMiddle}>
                                        <div className={styles.messageTag}>
                                            French student
                                        </div>
                                        <div className={styles.messageTag}>
                                            Computer science
                                        </div>
                                    </div>
                                    <div className={styles.messageMiddle}>
                                        <div className={styles.messageTag}>
                                            EPITA School
                                        </div>
                                    </div>
                                    <div className={styles.messageBottom}>
                                        I'm a student at EPITA, a french engineering and
                                        computer science focused school. I'm highly
                                        interested in artificial intelligence, such as
                                        deep learning and neural networks and I am
                                        learning aside from my academic courses some web
                                        technologies, like Javascript with Node.js and
                                        React.js, docker, Kubernetes, web services (Google
                                        Cloud Engine, Amazon Web Service and Microsoft
                                        Azure), and other web basics (HTML, CSS, PHP,
                                        MySQL / MariaDB). At school, I teach to first-year
                                        students the basics of programming, especially in
                                        OCaml and C#.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footerCard}>
                                <div className={styles.inputDiv}>
                                    <input type="text" autoComplete="false" />
                                    <div className={styles.sendContainer}>
                                        <div className={styles.send}>
                                            <div className={styles.messageSend}>Send</div>
                                            <FiSend />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className={styles.skills}>
                            <div className={styles.titleSkills}>Skills</div>
                            <div className={styles.skillsList}>
                                {data.skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className={`${styles.skillItem} ${
                                            index < 3 ? styles.active : ""
                                        }`}
                                        style={{
                                            width: `${skill.amount}%`,
                                        }}
                                    >
                                        <div className={styles.skillName}>
                                            {skill.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
