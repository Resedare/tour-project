import Button from '@components/Button/Button';
import Header from '@layouts/Header/Header';
import Footer from '@layouts/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useTours } from '@hooks/useTours';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '@components/Container/Container';
import styles from './CityPage.module.scss'
import ToursList from '../HomePage/Tours/ToursList/ToursList';
import CityInfo from './CityInfo/CityInfo';

const CityPage = () => {
  const { city } = useParams();
  const { directions } = useTours();
  const location = useLocation();
  const [currentDirection, setCurrentDirection] = useState(null);
  const [currentMenu, setCurrentMenu] = useState('экскурсии');

  useEffect(() => {
    if (location.state && location.state.direction) {
      setCurrentDirection(location.state.direction);
    } else {
      const direction = directions.find(element => element.city === city);
      setCurrentDirection(direction);
    }
  }, [city, directions, location.state]);

  const handleChangeMenu = (e) => {
    setCurrentMenu(e.target.textContent.trim().toLowerCase())
    console.log(currentMenu)
  }
  return (
    <>
      {currentDirection ?
        <>
          <Header isMainPage={false} currentDirection={currentDirection} />
          <Container className={styles.city}>
            <div className={styles.cityMenu}>
              <Button
                className={currentMenu === 'экскурсии' ? `${styles.cityMenuButton} ${styles.active}` : `${styles.cityMenuButton}`}
                onClick={handleChangeMenu}>Экскурсии</Button>
              <Button
                className={currentMenu === 'рестораны' ? `${styles.cityMenuButton} ${styles.active}` : `${styles.cityMenuButton}`}
                onClick={handleChangeMenu}>Рестораны</Button>
              <Button
                className={currentMenu === 'отели' ? `${styles.cityMenuButton} ${styles.active}` : `${styles.cityMenuButton}`}
                onClick={handleChangeMenu}>Отели</Button>
              <Button
                className={currentMenu === 'кафе' ? `${styles.cityMenuButton} ${styles.active}` : `${styles.cityMenuButton}`}
                onClick={handleChangeMenu}>Кафе</Button>
              <Button
                className={currentMenu === 'театры' ? `${styles.cityMenuButton} ${styles.active}` : `${styles.cityMenuButton}`}
                onClick={handleChangeMenu}>Театры</Button>
              <Button
                className={currentMenu === 'музеи' ? `${styles.cityMenuButton} ${styles.active}` : `${styles.cityMenuButton}`}
                onClick={handleChangeMenu}>Музеи</Button>
            </div>
            <>
              {currentMenu == 'экскурсии' && <ToursList currentDirection={currentDirection} isLimited={false} />}
              {currentMenu == 'рестораны' && <div className={styles.cityMenuTitle}>Ресторанов нет</div>}
              {currentMenu == 'отели' && <div className={styles.cityMenuTitle}>Отелей нет</div>}
              {currentMenu == 'кафе' && <div className={styles.cityMenuTitle}>Кафе нет</div>}
              {currentMenu == 'театры' && <div className={styles.cityMenuTitle}>Театров нет</div>}
              {currentMenu == 'музеи' && <div className={styles.cityMenuTitle}>Музеев нет</div>}
            </>
            <CityInfo />

          </Container>
          <Footer />
        </> :
        <div>Ошибка, такой страницы нет</div>
      }
    </>
  )
}

export default CityPage
