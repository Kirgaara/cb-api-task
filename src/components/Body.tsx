import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import InputForm from './InputForm'
import ValuesList from './ValuesList'

const Body = () => {
  const [values, setValues] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [currency, setCurrency] = useState('')

  useEffect(() => {
    axios
      .get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((response: AxiosResponse) => {
        setValues(response.data.Valute)
      })
      .catch((error) => setErrorMessage(error.message))
  }, [])

  return errorMessage ? (
    <h1>Ошибка! {errorMessage}</h1>
  ) : (
    <>
      <InputForm currency={currency} setCurrency={setCurrency} />
      <ValuesList values={values} currency={currency} />
    </>
  )
}

export default Body
