import Button from '@components/Button/Button';
import styles from './Header.module.scss';
import Container from '@components/Container/Container';
import Navbar from './Navbar/Navbar';
const Header = ({ isMainPage, currentDirection }) => {

    return (
        <Container>
            <Navbar />
            {isMainPage ?
                <div className={styles.header} style={{ backgroundImage: `url(/src/assets/images/headerIBackground.jpg)` }}>
                    <div className={styles.headerBox}>
                        <h1 className={styles.headerTitle}>Поиск и бронирование экскурсий</h1>
                        <img src="src/assets/icons/swoosh.svg" alt="" className={styles.headerSwoosh} />
                        <p className={styles.headerText}>Экскурсии и частные гиды в России и за рубежом</p>
                        <div className={styles.headerSearchBox}>
                            <Button><img src="src/assets/icons/geo.svg" alt="" /></Button>
                            <input type="text" name="" id="" placeholder='Выберите направление' />
                            <Button className={styles.headerSearchBoxFind}><img src="src/assets/icons/searchBlack.svg" alt="" />Найти</Button>
                        </div>
                        <div className={styles.headerCities}>
                            <a href="#">Дубай</a>
                            <a href="#">Стамбул</a>
                            <a href="#">Санкт-Петербург</a>
                            <a href="#">Казань</a>
                            <a href="#">Мурманск</a>
                        </div>
                    </div>
                </div> :
                <div className={styles.header} style={{ backgroundImage: `url(${currentDirection.headerImg})` }}>
                    <div className={isMainPage ? styles.headerBox : styles.headerCityBox}>
                        <h1 className={isMainPage ? styles.headerTitle : styles.headerCityTitle}>Экскурсии в {currentDirection.city}</h1>
                        <img src="../src/assets/icons/swoosh.svg" alt="" className={styles.headerSwoosh} />
                        <p className={isMainPage ? styles.headerText : styles.headerCityText}>Экскурсии и частные гиды в России и за рубежом</p>
                    </div>
                </div>
            }
        </Container>
    )
}

export default Header