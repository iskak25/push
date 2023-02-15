import React from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Text from '../components/Text/Text'
import LoginLogo from '../Login/LoginLogo/LoginLogo'
import loginUserStyle from '../LoginUser/LoginUser.module.scss'

const LoginUser = () => {
  return (
    <>
      <div className={loginUserStyle.loginUser_container}>
        <LoginLogo />
        <div className={loginUserStyle.loginUser}>
          <div className={loginUserStyle.loginUser_input}>
            <Input type={'text'} placeholder={'номер телефона'} />
            <Input type={'passward'} placeholder={'пароль'} />
          </div>
          <div className={loginUserStyle.loginUser_button}>
            <Button value={'Войти'} />
          </div>
          <div className={loginUserStyle.loginUser_text}>
            <Text link={'/recovery'} p={'забыли пароль? '} a={'восстановить'} />

            <Text
              link={'/loginPage'}
              p={' нет аккаунта? '}
              a={'зарегистрироваться'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginUser
