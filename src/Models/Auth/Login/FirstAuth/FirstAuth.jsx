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
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [passward, setPassward] = useState('')
  const [checPassward, setChecPassward] = useState('')

  const vales = {
    email: 'iskak2512@gmail.com',
    firstName: 'iskak',
    lastName: 'bek',
    password: '1234567',
    confirmPass: '1234567',
    placeOfBirth: 'bishkek',
    phoneNumber: '0708207734',
  }

  console.log(vales)
  const userData = JSON.stringify(vales, null, 2)
  const dispatch = useDispatch()

  console.log(userData)
  console.log('vgbjhjnk')

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  )
  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    // if (isSuccess) {
    //   navigate('/signin')
    //   toast.success(message)
    // }

    dispatch(reset())
  }, [user, isError, isSuccess, message, dispatch])

  return (
    <>
      <div className={firstStyle.first_container}>
        <div className={firstStyle.first}>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              onChange={(e) => setPhone(e.target.value)}
              className={firstStyle.input_big}
              type="text"
              placeholder="номер телефона"
              value={phone}
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
              onChange={(e) => setPassward(e.target.value)}
              className={firstStyle.input_small}
              type="password"
              placeholder="пароль вашего e-mail"
              value={passward}
            />
          </div>
          <div className={firstStyle.first_item}>
            <input
              onChange={(e) => setChecPassward(e.target.value)}
              className={firstStyle.input_big}
              type="password"
              placeholder="подтверждение пароля"
              value={checPassward}
            />
          </div>
          <div className={firstStyle.first_text}>
            <input
              onChange={(e) => setChecPassward(e.target.value)}
              type="checkbox"
            />
            <Text
              p={' Я согласен с условиями'}
              a={' пользовательского соглашения'}
            />
          </div>
          <div className={firstStyle.first_button}>
            <button
              onClick={() => dispatch(signup(userData))}
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
