import React, { useState } from 'react'
import 'fontsource-roboto'
import {
  TextField,
  InputBase,
  IconButton,
  Paper,
  Box,
  Grid,
} from '@material-ui/core'
import { AddCircleOutline as AddIcon } from '@material-ui/icons'
import ReactDOM from 'react-dom'
import './popup.css'
import WeatherCard from './weatherCard'

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([
    'toronto',
    'new York',
    'error',
  ])

  const [cityInput, setCityInput] = useState<string>('')

  const handleCityButtonClick = () => {
    if (cityInput === '') {
      return
    }

    setCities([...cities, cityInput])
    setCityInput('')
  }

  const handleCityDeleteButtonClick = (index: number) => {
    cities.splice(index, 1)
    setCities([...cities])
  }

  return (
    <Box mx='8px' my='16px'>
      <Grid container>
        <Grid item>
          <Paper>
            <Box px='15px' py='5px'>
              <InputBase
                placeholder='Add a city name'
                value={cityInput}
                onChange={(event) => setCityInput(event.target.value)}
              />
              <IconButton onClick={handleCityButtonClick}>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {cities.map((city, index) => (
        <WeatherCard
          city={city}
          key={index}
          onDelete={() => {
            handleCityDeleteButtonClick(index)
          }}
        />
      ))}
      <Box height={'16px'}></Box>
    </Box>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
