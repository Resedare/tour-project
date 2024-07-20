import Container from "@components/Container/Container";
import Button from "@components/Button/Button";
import styles from './Tours.module.scss';
import { useTours } from "@hooks/useTours";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tours = () => {
    const { directions } = useTours();
    const [selectedCity, setSelectedCity] = useState('');
    const [currentDirection, setCurrentDirection] = useState(null);

    const handleChange = (e) => {
        setSelectedCity(e.target.value)
    };
    let showedTours = 0;
    const MAX_SHOWED_TOURS = 4;

    useEffect(() => {
        const direction = directions.find(element => element.city === selectedCity)
        setCurrentDirection(direction);
    }, [selectedCity, directions]);
    return (
        <Container className={styles.tours}>
            <div className={styles.toursChoose}>
                <h2 className={styles.toursChooseTitle}>Экскурсии</h2>
                <select className={styles.toursChooseCities} placeholder='Выберите город' name='cities' value={selectedCity} onChange={handleChange}>
                    <option value="" disabled>Выберите город</option>
                    <option className={styles.toursChooseCity} value="Санкт-Петербург">Санкт-Петербург</option>
                    <option className={styles.toursChooseCity} value="Мурманск">Мурманск</option>
                    <option className={styles.toursChooseCity} value="Калининград">Калининград</option>
                    <option className={styles.toursChooseCity} value="Стамбул">Стамбул</option>
                    <option className={styles.toursChooseCity} value="Дубай">Дубай</option>
                </select>
                <input required className={styles.toursChooseDate} placeholder='Выберите дату' type="text" name="date" id="" onFocus={(e) => e.target.type = 'date'} />
            </div>
            <div className={styles.toursList}>
                {currentDirection && currentDirection.tours.length ? currentDirection.tours.map((item) => {
                    while (showedTours < MAX_SHOWED_TOURS) {
                        showedTours++
                        return (
                            <div key={item.name} className={styles.toursItem}>
                                <div className={styles.toursItemImage} style={{ backgroundImage: `url(${item.img})` }}>
                                    <Button className={styles.toursItemLike}><img src="src/assets/icons/likeWhite.svg" alt="" /></Button>
                                </div>
                                <div className={styles.toursItemMain}>
                                    <div className={styles.toursItemMainInfo}>
                                        <h3 className={styles.toursItemMainInfoTitle}>{item.name}</h3>
                                        <p className={styles.toursItemMainInfoDescription}>{item.description}</p>
                                        <hr />
                                    </div>
                                    <div className={styles.toursItemMainFooter}>
                                        <div className={styles.toursItemMainFooterLeft}>
                                            <p className={styles.toursItemMainFooterPrice}><span className={styles.toursItemMainFooterPriceBold}>от {item.minPrice} ₽ / </span>с чел</p>
                                            <select className={styles.toursItemMainFooterTime}>
                                                <option value="" disabled selected>Выбрать время</option>
                                                <option value="">с 9:00 до 13:00</option>
                                                <option value="">с 10:00 до 16:00</option>
                                                <option value="">с 12:00 до 16:00</option>
                                                <option value="">с 14:00 до 18:00</option>
                                            </select>
                                        </div>
                                        <div className={styles.toursItemMainFooterRight}>
                                            <Button className={styles.toursItemMainFooterAdd}><img src="src/assets/icons/plus.svg" alt="" /></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }) : <div className={styles.toursOutof}>{currentDirection ? `Экскурсий в ${currentDirection.city} нет` : `Выберите город`}</div>}
                {currentDirection && currentDirection.tours.length > MAX_SHOWED_TOURS && (
                    <Link to={`/${currentDirection.city}`} state={{ currentDirection }} className={styles.toursAll}>Все экскурсии</Link>
                )}
            </div>
        </Container >
    )
}

export default Tours