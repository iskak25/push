import React from 'react'
import Button from '../components/Button/Button'
import Text from '../components/Text/Text'
import NumberInput from '../components/NumberInput/NumberInput'
import LoginLogo from '../Login/LoginLogo/LoginLogo'
import recoveryStyle from '../Recovery/Recovery.module.scss'

const Recovery = () => {
  return (
    <>
      <div className={recoveryStyle.recovery_container}>
        <LoginLogo />
        <div className={recoveryStyle.recovery}>
          <NumberInput />
          <Button value={'Восстановить'} />
          <Text link={'/LoginUser'} p={'вспомнили пароль?'} a={'войти'} />
          <div className={recoveryStyle.recovery_text}>
            <Text
              link={'/loginPage'}
              p={'нет аккаунта?'}
              a={'зарегистрироваться'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Recovery
