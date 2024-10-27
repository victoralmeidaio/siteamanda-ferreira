import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from './components/loader'

import './App.css'
import Links from './pages/links/links.jsx'
import Website from './pages/website/website.jsx'


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    loading ? (
      <Loader />
    ) : (
      <BrowserRouter>
        <Routes>
          <Route path='/links' element={<Links />} />
          <Route path='/' element={<Website />} />
        </Routes>
      </BrowserRouter>
    )
  );
}
export default App
