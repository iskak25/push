// import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import FirstAuth from './FirstAuth/FirstAuth'
import loginStyle from '../Login/Login.module.scss'
import SecondAuth from './SecondAuth/SecondAuth'
import ThirdAuth from './ThirdAuth/ThirdAuth'
import LoginUser from '../LoginUser/LoginUser'
import Recovery from '../Recovery/Recovery'
import NewPassword from '../NewPassword/NewPassword'

const Login = () => {
  return (
    <>
      <div className={loginStyle.login}>
        <FirstAuth />
        {/* <SecondAuth /> */}
        {/* <ThirdAuth /> */}
        {/* <LoginUser /> */}
        {/* <Recovery /> */}
        {/* <NewPassword /> */}
      </div>
    </>
  )
}

export default Login
