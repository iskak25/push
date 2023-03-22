import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signin } from '../../../redux/features/auth/AuthSlice'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import TwoSteps from '../components/Steps/TwoSteps/TwoSteps'
import Text from '../components/Text/Text'
import LoginLogo from '../Login/LoginLogo/LoginLogo'
import loginUserStyle from '../LoginUser/LoginUser.module.scss'

const LoginUser = () => {
  const [step, setStep] = useState(0)
  const vales = {
    email: 'iskak2512@gmail.com',
    password: '1234567',
  }
  const userData = JSON.stringify(vales, null, 2)

  const dispatch = useDispatch()

  function log() {
    console.log('log in asd')
  }

  return (
    <>
      <div className={loginUserStyle.loginUser_container}>
        <TwoSteps page={step} />
        <div className={loginUserStyle.content}>
          <LoginLogo />
          <div className={loginUserStyle.loginUser}>
            <div className={loginUserStyle.loginUser_input}>
              <div className={loginUserStyle.loginUser_item}>
                <input
                  className={loginUserStyle.input_big}
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div className={loginUserStyle.loginUser_item}>
                <input
                  className={loginUserStyle.input_big}
                  type="password"
                  placeholder="Пароль"
                />
              </div>
            </div>
            <div className={loginUserStyle.loginUser_button}>
              <button
                className={loginUserStyle.loginUser_btn}
                onClick={() => dispatch(signin(userData))}
                value={'Войти'}
              >
                Войти
              </button>
            </div>
            <div className={loginUserStyle.loginUser_text}>
              <Text
                link={'/recovery'}
                p={'забыли пароль? '}
                a={'восстановить'}
              />

              <Text
                link={'/loginPage'}
                p={' нет аккаунта? '}
                a={'зарегистрироваться'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginUser
