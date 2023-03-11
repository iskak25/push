import React from 'react'
import headerStyle from './Header.module.scss'
import header_img from '../../../assest/img/header_img.png'
import Button from '../../../Auth/components/Button/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className={headerStyle.text}>
        <h1 className={headerStyle.text_h1}>РАСТИ ВМЕСТЕ С НАМИ</h1>
        <div className={headerStyle.img}>
          <img src={header_img} alt="header_img" />
        </div>
        <Link to="/loginPage">
          <button className={headerStyle.header_button}>
            Зарегистрироваться
          </button>
        </Link>
      </div>
    </>
  )
}

export default Header
