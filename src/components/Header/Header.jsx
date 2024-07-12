import Button from '../Button/Button'
import styles from './Header.module.scss'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
const Header = () => {
    return (
        <Container>
            <Navbar />
            <div className={styles.header}>
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
            </div>
        </Container>
    )
}

export default Header