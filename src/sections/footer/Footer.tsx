import React from "react"
import styles from "./Footer.module.scss"
import { FiMail, FiLinkedin } from "react-icons/fi"

export default () => {
    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.title}>How to contact me?</div>
                <div className={styles.links}>
                    <a className={styles.item} href="mailto:tran@tamtanguy.fr">
                        <FiMail />
                        <div className={styles.itemText}>tran@tamtanguy.fr</div>
                    </a>
                    <a
                        className={styles.item}
                        href="https://www.linkedin.com/in/t%C3%A2m-tanguy-tran-14028a1ab/"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin />
                        <div className={styles.itemText}>Linkedin</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
