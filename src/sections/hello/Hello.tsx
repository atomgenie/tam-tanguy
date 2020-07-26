import React from "react"
import styles from "./Hello.module.scss"
import background from "./background.svg"

export default () => {
    return (
        <div className={styles.helloRoot}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="container">
                    <div className={styles.title}>
                        <h1>
                            Tâm-Tanguy <span className={styles.lastname}>TRAN</span>
                        </h1>
                        <div className={styles.description}>Computer Science Student</div>
                    </div>
                    <div className={styles.welcome}>
                        <div className={styles.helloMessage}>
                            <div className={styles.me}>
                                <div className={styles.meContain}>TT</div>
                            </div>
                            <div className={styles.messages}>
                                <div className={styles.messageTop}>Welcome!</div>
                                <div className={styles.messageBottom}>
                                    <div className={styles.dot} />
                                    <div className={styles.dot} />
                                    <div className={styles.dot} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
