import './App.scss'
import { ToursProvider } from './components/contexts/ToursContext'
import Header from './components/Header/Header'
import PopularDirections from './components/PopularDirections/PopularDirections'
import Tours from './components/Tours/Tours'

function App() {

  return (
    <>
      <ToursProvider>
        <Header />
        <PopularDirections />
        <Tours />
      </ToursProvider>
    </>
  )
}

export default App
