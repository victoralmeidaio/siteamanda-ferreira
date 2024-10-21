import { BrowserRouter, Route, Routes } from 'react-router-dom'


import './App.css'
import Links from './pages/links/links.jsx'
import Website from './pages/website/website.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Links />} />
        <Route path='/website' element={<Website />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
