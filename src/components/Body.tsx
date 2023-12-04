import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import getValuesList from '../utils/getValuesList'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import IconButton from '@mui/material/IconButton'
import StarRateIcon from '@mui/icons-material/StarRate'
import StarIcon from '@mui/icons-material/StarBorder'
import selectOptions from '../utils/selectOptions'
import charCode from '../constants/charCode'

const Body = () => {
  const [values, setValues] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [currency, setCurrency] = useState('')
  const [favorites, setFavorites] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string)
  }

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
      <Grid
        container
        spacing={1}
        sx={{
          '--Grid-borderWidth': '2px',
          borderColor: 'divider',
          '& > div': {
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        <Grid xs={2}>
          <Typography variant="h5" component="h2">
            Избранное
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="h5" component="h2">
            Валюта
          </Typography>
        </Grid>
        <Grid xs={2}>
          <Typography variant="h5" component="h2">
            Единиц
          </Typography>
        </Grid>
        <Grid xs={2}>
          <Typography variant="h5" component="h2">
            Буквенный код
          </Typography>
        </Grid>
        <Grid xs={2}>
          <Typography variant="h5" component="h2">
            Курс
          </Typography>
        </Grid>
        {getValuesList(values, currency, favorites).map((el) => (
          <>
            {favorites.filter((element) => element === el.CharCode).length ? (
              <Grid xs={2}>
                <IconButton
                  aria-label="favorite"
                  onClick={() => {
                    setFavorites(
                      favorites.filter((element) => element !== el.CharCode)
                    )
                  }}
                >
                  <StarRateIcon sx={{ color: 'gold' }} />
                </IconButton>
              </Grid>
            ) : (
              <Grid xs={2}>
                <IconButton
                  aria-label="favorite"
                  color="primary"
                  onClick={() => {
                    setFavorites([...favorites, el.CharCode])
                  }}
                >
                  <StarIcon />
                </IconButton>
              </Grid>
            )}
            <Grid xs={4} key={el.Name}>
              <Typography variant="subtitle1" component="h2" key={el.Name}>
                {el.Name}
              </Typography>
            </Grid>
            <Grid xs={2} key={el.Nominal}>
              <Typography variant="subtitle1" component="h2" key={el.Nominal}>
                {el.Nominal}
              </Typography>
            </Grid>
            <Grid xs={2} key={el.CharCode}>
              <Typography variant="subtitle1" component="h2" key={el.CharCode}>
                {el.CharCode}
              </Typography>
            </Grid>
            <Grid xs={2} key={el.Value}>
              <Typography variant="subtitle1" component="h2" key={el.Value}>
                {el.Value}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  )
}

export default Body
