import React, { useEffect, useState } from 'react'
import firstStyle from '../FirstAuth/FirstAuth.module.scss'
import { Link } from 'react-router-dom'
import LoginLogo from '../LoginLogo/LoginLogo'
import Text from '../../components/Text/Text'
import Button from '../../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  reset,
  // signin,
  signup,
} from '../../../../redux/features/auth/AuthSlice'

const FirstAuth = (props) => {
  function newPages() {
    props.onNext()
    dispatch(signup(userData))
    console.log('new')
  }
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [placeOfBirth, setPlaceOfBirth] = useState('')

  const vales = {
    email,
    firstName,
    lastName,
    password,
    confirmPass,
    placeOfBirth,
    phoneNumber,
  }
  const userData = JSON.stringify(vales, null, 2)
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  )
  useEffect(() => {
    // if (isError) {
    // toast.error(message)
    // }

    if (isSuccess) {
      newPages()
      // navigate('')
      // toast.success(message)
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, dispatch])

  return (
    <>
      <div className={firstStyle.first_container}>
        <div className={firstStyle.first}>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className={firstStyle.input_small}
              type="text"
              placeholder="имя"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              className={firstStyle.input_small}
              type="text"
              placeholder="фамилия"
              value={lastName}
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={firstStyle.input_big}
              type="number"
              placeholder="номер телефона"
              value={phoneNumber}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={firstStyle.input_small}
              type="email"
              placeholder="e-mail"
              value={email}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={firstStyle.input_small}
              type="password"
              placeholder="пароль вашего e-mail"
              value={password}
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setPlaceOfBirth(e.target.value)}
              className={firstStyle.input_small}
              type="text"
              placeholder="место проживания"
              value={placeOfBirth}
            />
            <input
              className={firstStyle.input_small}
              onChange={(e) => setConfirmPass(e.target.value)}
              type="password"
              placeholder="подтверждение пароля"
              value={confirmPass}
            />
          </div>

          <div className={firstStyle.first_text}>
            <input
              // onChange={(e) => setChecPassword(e.target.value)}
              type="checkbox"
            />
            <Text
              p={' Я согласен с условиями'}
              a={' пользовательского соглашения'}
            />
          </div>
          <div className={firstStyle.first_button}>
            <button
              type="submit"
              onClick={() => newPages()}
              className={firstStyle.first_btn}
            >
              Зарегистрироваться
            </button>
          </div>
          <div className={firstStyle.first_text}>
            <Text
              p={'вы уже зарегистрированы?'}
              link={'/LoginUser'}
              a={'войти'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstAuth
