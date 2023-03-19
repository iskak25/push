import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import NumberInput from '../../components/NumberInput/NumberInput'
import Text from '../../components/Text/Text'
import LoginLogo from '../LoginLogo/LoginLogo'
import secondStyle from '../SecondAuth/SecondAuth.module.scss'
const SecondAuth = () => {
  return (
    <>
      <div className={secondStyle.second_container}>
        {/* <LoginLogo /> */}
        <div className={secondStyle.second}>
          <NumberInput />
          <div className={secondStyle.second_button}>
            <Link to="/">
              <button className={secondStyle.btn}>Подтвердить</button>
            </Link>
          </div>
          <p>
            не получили код?
            <a href="*">отправить еще раз</a>
          </p>
          <Text
            p={'вы уже зарегистрированы?'}
            link={'/LoginUser'}
            a={'войти'}
          />
        </div>
      </div>
    </>
  )
}

export default SecondAuth
