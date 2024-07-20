import Header from '@layouts/Header/Header';
import Footer from '@layouts/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useTours } from '@hooks/useTours';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CityPage = () => {
  const { city } = useParams();
  const { directions } = useTours();
  const location = useLocation();
  const [currentDirection, setCurrentDirection] = useState(null);

  useEffect(() => {
    if (location.state && location.state.direction) {
      setCurrentDirection(location.state.direction);
    } else {
      const direction = directions.find(element => element.city === city);
      setCurrentDirection(direction);
    }
  }, [city, directions, location.state]);
  return (
    <>
      {currentDirection ?
        <>
          <Header isMainPage={false} currentDirection={currentDirection} />
          <div>CityPage for</div>
          <Footer />
        </> :
        <div>Ошибка, такой страницы нет</div>
      }
    </>
  )
}

export default CityPage
