import React from 'react'
import styles from './style.module.scss'
import $ from './jquery.js'

const LOGO = () => {

    $(function () {
        $('#js-hamburger-menu, .navigation__link').on('click', function () {
          $('.navigation').slideToggle(500)
          $('.hamburger-menu').toggleClass('hamburger-menu--open')
        });
      });

  return (
  <>
    <div className={styles.logo}>
        <img src="../../../img/header_logo.png" alt="チーズアカデミーロゴ" className={styles.logo_img}/>  
    </div>
    <button className={styles.hamburger-menu} id="js-hamburger-menu">
        <span className={styles.hamburger-menu__bar}></span>
        <span className={styles.hamburger-menu__bar}></span>
        <span className={styles.hamburger-menu__bar}></span>
    </button>
  </>
  )
}

export default LOGO