import './App.css'
import '@fontsource/outfit'
import '@fontsource/roboto'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Project from './routes/Project'
import {Route,Routes } from 'react-router-dom';


function App () {
  return <>
  <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path='/project' element={<Project></Project>} />
    <Route path='/about' element={<About></About>} />
    <Route path='/contact' element={<Contact></Contact>} />
  </Routes>
  </>
}

export default App
