import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import TipCalculator from './pages/TipCalculator'
import About from './pages/About'

function App () {
return (
  <>
    <nav className='nav'>
      <Link to='/'>Tip Calculator</Link>
      <Link to='/about'>About</Link>
    </nav>
    <Routes>
      <Route path='/' element={<TipCalculator />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </>
)
}

export default App
