import React from 'react'
import LoginLogo from '../LoginLogo/LoginLogo'
import firstStyle from '../FirstAuth/FirstAuth.module.scss'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import { Link } from 'react-router-dom'

const FirstAuth = () => {
  return (
    <>
      <div className={firstStyle.first_container}>
        <LoginLogo />
        <div className={firstStyle.first}>
          <div className={firstStyle.first_item}>
            <input
              className={firstStyle.input_small}
              type="text"
              placeholder="имя"
            />
            <input
              className={firstStyle.input_small}
              type="text"
              placeholder="фамилия"
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              className={firstStyle.input_big}
              type="text"
              placeholder="номер телефона"
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              className={firstStyle.input_small}
              type="text"
              placeholder="e-mail"
            />
            <input
              className={firstStyle.input_small}
              type="password"
              placeholder="пароль вашего e-mail"
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              className={firstStyle.input_big}
              type="password"
              placeholder="подтверждение пароля"
            />
          </div>
          <div className={firstStyle.first_button}>
            <Button value={'зарегистрироваться'} />
          </div>
          <div className={firstStyle.first_text}>
            <Text
              p={'вы уже зарегистрированы?'}
              link={'/LoginUser'}
              a={'войти'}
            />
          </div>
          <div className={firstStyle.first_text}>
            <input type="checkbox" />
            <Text
              p={' Я согласен с условиями'}
              a={' пользовательского соглашения'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstAuth
