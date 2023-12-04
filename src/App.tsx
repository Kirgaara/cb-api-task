import React from 'react'
import './App.css'
import Body from './components/Body'
import Box from '@mui/material/Box'

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          padding: 2,
        }}
      >
        <Body />
      </Box>
    </div>
  )
}

export default App
