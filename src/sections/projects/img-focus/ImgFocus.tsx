import React, { useRef } from "react"
import styles from "./ImgFocus.module.scss"
import { useDetectClickOutside } from "helpers/hooks"
import { FiX } from "react-icons/fi"

interface props {
  imgUrl?: string
  onClose?: () => void
  isOpen: boolean
}

const ImgFocus: React.FC<props> = ({ imgUrl, isOpen, onClose }) => {
  const contentRef = useRef(null)

  useDetectClickOutside(contentRef, isOpen, () => {
    onClose && onClose()
  })

  if (!isOpen || !imgUrl) {
    return <div />
  }

  return (
    <div className={styles.root}>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.closeButton} onClick={onClose}>
          <FiX />
        </div>
        <img src={imgUrl} alt="Project content" className={styles.imgContent} />
      </div>
    </div>
  )
}

export default ImgFocus
