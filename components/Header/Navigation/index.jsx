import React from 'react'
import styles from './style.module.scss'

const Navigation = () => {
  return (
<>
  <nav className={styles.navigation}>
    <ul className={styles.navigation__list}>
        <li className={styles.navigation__list-item}>
            <a href="#ABOUT" className={styles.navigation__link}>ABOUT</a></li>
        <li className={styles.navigation__list-item}><a href="#COURSE" className={styles.navigation__link}>COURSE</a></li>
        <li className={styles.navigation__list-item}><a href="#NEWS" className={styles.navigation__link}>NEWS</a></li>
        <li className={styles.navigation__list-item}><a href="#ACCESS" className={styles.navigation__link}>ACCESS</a></li>
        <li className={styles.navigation__list-item}><a href="#CONTACT" className={styles.navigation__link}>CONTACT</a></li>
    </ul>
  </nav>
</>
  )
}

export default Navigation