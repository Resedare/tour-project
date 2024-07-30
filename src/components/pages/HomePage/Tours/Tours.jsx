import Container from "@components/Container/Container";
import styles from './Tours.module.scss';
import { useTours } from "@hooks/useTours";
import { useEffect, useState } from "react";
import ToursList from "./ToursList/ToursList";

const Tours = () => {
    const { directions } = useTours();
    const [selectedCity, setSelectedCity] = useState('');
    const [currentDirection, setCurrentDirection] = useState(null);

    const handleChange = (e) => {
        setSelectedCity(e.target.value)
    };

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
            <ToursList currentDirection={currentDirection} isLimited={true} />
        </Container >
    )
}

export default Tours