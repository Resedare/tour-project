import './App.scss'
import { ToursProvider } from './components/contexts/ToursContext';
import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/Header/Header';
import PopularDirections from './components/PopularDirections/PopularDirections';
import Tours from './components/Tours/Tours';

function App() {

  return (
    <>
      <ToursProvider>
        <Header />
        <PopularDirections />
        <Tours />
      </ToursProvider>
      <Footer />
    </>
  )
}

export default App
