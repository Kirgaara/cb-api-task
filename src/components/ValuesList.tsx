import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import getValuesList from '../utils/getValuesList'
import IconButton from '@mui/material/IconButton'
import StarRateIcon from '@mui/icons-material/StarRate'
import StarIcon from '@mui/icons-material/StarBorder'

type ListParams = {
  values: {}
  currency: string
}

const ValuesList = ({ values, currency }: ListParams) => {
  const [favorites, setFavorites] = useState<string[]>([])
  return (
    <>
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

export default ValuesList
