import React, { useState } from 'react'
import ReactCodeInput from 'react-code-input'
import { reactCodeInput } from '../NumberInput/NumberInput.module.scss'
import numberInputStyle from '../NumberInput/NumberInput.module.scss'

const CORRECT_PIN_CODE = '111222'

const NumberInput = () => {
  const [isPinCodeValid, setIsPinCodeValid] = useState(true)
  const [pinCode, setPinCode] = useState('')
  const [btnIsPressed, setBtnIsPressed] = useState(false)

  const checkPinCode = () => {
    const isPinCodeValid = pinCode === CORRECT_PIN_CODE

    setBtnIsPressed(true)
    setIsPinCodeValid(isPinCodeValid)
    if (!isPinCodeValid) setPinCode('')
  }

  const handlePinChange = (pinCode) => {
    setPinCode(pinCode)
    setBtnIsPressed(false)
  }

  return (
    <>
      <div className={numberInputStyle.numberInput_text}>
        <p>
          Мы отправили код на ваш e-mail. Перейдите по ссылке в письме, чтобы
          продолжить
        </p>
      </div>
      <div className={numberInputStyle.numberInput_input}>
        <ReactCodeInput
          // {...props}
          id="pinCode"
          type="number"
          isValid={isPinCodeValid}
          fields={4}
          onChange={handlePinChange}
          value={pinCode}
          className={numberInputStyle.input}
        />
        {/* <input className={numberInputStyle.input} type="text" placeholder="-" />
        <input className={numberInputStyle.input} type="text" placeholder="-" />
        <input className={numberInputStyle.input} type="text" placeholder="-" />
        <input className={numberInputStyle.input} type="text" placeholder="-" /> */}
        {/* готовая фукция  */}
        {/* <button onClick={checkPinCode}>Check pin</button> */}
        {/* готовая фукция  */}
      </div>
      <div></div>
    </>
  )
}

export default NumberInput
