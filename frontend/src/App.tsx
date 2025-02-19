import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Title, Button } from '@mantine/core'
import { Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomeScreen/>} />
        <Route path="/search" element={<SearchScreen/>} />
      </Routes>
    </>
  )
}

export default App
