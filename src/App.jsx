import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Cars from './pages/Cars'
import About from './pages/About'
import LayoutHost from './components/LayoutHost'
import Dashboard from './pages/Dashboard'
import HostCars from './pages/HostCars'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='cars' element={<Cars />}/>
          <Route path='host' element={<LayoutHost />}>
            <Route index element={<Dashboard />} />
            <Route  path='cars' element={<HostCars />}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
