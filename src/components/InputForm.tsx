import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import selectOptions from '../utils/selectOptions'
import charCode from '../constants/charCode'

type ParamsType = {
  currency: string
  setCurrency: React.Dispatch<React.SetStateAction<string>>
}

const InputForm = ({ currency, setCurrency }: ParamsType) => {
  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string)
  }

  return (
    <>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: 400,
          backgroundColor: 'lightgrey',
          padding: 2,
          borderRadius: '10px',
          border: '2px solid black',
          marginBottom: 3,
        }}
      >
        <InputLabel id="value-input" sx={{ padding: 1 }}>
          Базовая валюта
        </InputLabel>
        <Select
          labelId="value-input"
          id="value-select"
          value={currency}
          onChange={handleChange}
          label="Value"
        >
          {selectOptions(charCode).map((el) => (
            <MenuItem value={el} key={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default InputForm
