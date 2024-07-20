import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToursProvider } from './components/contexts/ToursContext';
import HomePage from './components/pages/HomePage/HomePage';
import CityPage from './components/pages/CityPage/CityPage';

function App() {

  return (
    <Router>
      <ToursProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:city" element={<CityPage />} />
        </Routes>
      </ToursProvider>
    </Router>
  )
}

export default App
