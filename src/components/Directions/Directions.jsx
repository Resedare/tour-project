import styles from './Directions.module.scss';
import { useState } from 'react';
const EXCURSIONS_DATA = [
    { name: 'Экскурсии в Санкт-Петербурге', link: 'https://vk.com' },
    { name: 'Экскурсии в Калининграде', link: 'https://vk.com' },
    { name: 'Экскурсии в Мурманске', link: 'https://vk.com' },
    { name: 'Экскурсии в Стамбуле', link: 'https://vk.com' },
    { name: 'Экскурсии в ОАЭ', link: 'https://vk.com' },
]
const TOURS_DATA = [
    { name: 'Авторский тур в Дагестан', link: 'https://vk.com' },
    { name: 'Авторский тур на Камчатку', link: 'https://vk.com' },
    { name: 'Авторский тур в Мурманск', link: 'https://vk.com' },
    { name: 'Авторский тур в Стамбул', link: 'https://vk.com' },
    { name: 'Авторский тур на Байкал', link: 'https://vk.com' },
]

const Directions = () => {

    const [isToursOpen, setIsToursOpen] = useState(false);

    const toggleTours = () => {
        setIsToursOpen(!isToursOpen)
    }
    return (
        <>
            <ul className={styles.dropdown}>
                {EXCURSIONS_DATA.map((item) => {
                    return (
                        <li key={item.name}><a href={item.link}>{item.name}</a>
                        </li>
                    )
                })}
                <li className={styles.dropdownAuthorTours} onMouseEnter={toggleTours}>Авторские туры<img src="src/assets/icons/arrowDown.svg" ></img></li>
                {isToursOpen &&
                    <ul className={styles.toursDropdown}>
                        {TOURS_DATA.map((item) => {
                            return (
                                <li key={item.name}><a href={item.link}>{item.name}</a>
                                </li>
                            )
                        }
                        )}
                    </ul>
                }
            </ul>
        </>
    )
}

export default Directions