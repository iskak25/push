import React from 'react'
import sadGirl from '../../../assest/img/sadGirl.png'
import isActivStyle from './IsActiv.module.scss'

const IsActiv = () => {
  return (
    <>
      <div className={isActivStyle.container}>
        <div className={isActivStyle.content}>
          <button className={isActivStyle.button}>включить свет</button>
          <img className={isActivStyle.img} src={sadGirl} alt="sadGirl" />
        </div>
      </div>
    </>
  )
}

export default IsActiv
