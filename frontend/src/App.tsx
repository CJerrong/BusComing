import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Title, Button } from '@mantine/core'
import { Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import NearbyBus from './screens/NearbyBus'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomeScreen/>} />
        <Route path="/search" element={<SearchScreen/>} />
        <Route path="/nearby" element={<NearbyBus/>}/>
      </Routes>
    </>
  )
}

export default App
