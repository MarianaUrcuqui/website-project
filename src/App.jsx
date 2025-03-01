import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Cars from './pages/Cars'
import About from './pages/About'
import LayoutProjects from './components/LayoutProjects'
import Dashboard from './pages/Dashboard'
import HostCars from './pages/HostCars'
import Project01 from './pages/Project01'
import Project02 from './pages/Project02'
import Project03 from './pages/Project03'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='projects' element={<LayoutProjects />}>
            <Route index element={<Project01 />} />
            <Route  path='project02' element={<Project02 />}/>
            <Route  path='project03' element={<Project03 />}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
