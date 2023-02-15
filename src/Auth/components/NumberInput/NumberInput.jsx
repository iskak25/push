import React from 'react'
import numberInputStyle from '../NumberInput/NumberInput.module.scss'

const NumberInput = () => {
  let number = +554454545

  return (
    <>
      <div className={numberInputStyle.numberInput_text}>
        <p>
          Введите код который мы отправили
          <br /> вам на
          <span>+996{number}</span>
        </p>
      </div>
      <div className={numberInputStyle.numberInput_input}>
        <input type="text" placeholder="-" />
        <input type="text" placeholder="-" />
        <input type="text" placeholder="-" />
        <input type="text" placeholder="-" />
      </div>
    </>
  )
}

export default NumberInput
