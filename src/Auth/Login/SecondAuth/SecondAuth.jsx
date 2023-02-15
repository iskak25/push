import React from 'react'
import Button from '../../components/Button/Button'
import NumberInput from '../../components/NumberInput/NumberInput'
import LoginLogo from '../LoginLogo/LoginLogo'
import secondStyle from '../SecondAuth/SecondAuth.module.scss'
const SecondAuth = () => {
  return (
    <>
      <div className={secondStyle.second_container}>
        <LoginLogo />
        <div className={secondStyle.second}>
          <NumberInput />
          <div className={secondStyle.second_button}>
            <Button value={'продолжить'} />
          </div>
          <p>
            не получили код?
            <a href="*">отправить еще раз</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default SecondAuth
