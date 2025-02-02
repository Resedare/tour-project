import styles from './Directions.module.scss';
import { useState } from 'react';
import { useTours } from '@hooks/useTours';
import { Link } from 'react-router-dom';

const Directions = () => {
    const { directions, authorTours } = useTours();

    const [isToursOpen, setIsToursOpen] = useState(false);

    const toggleTours = () => {
        setIsToursOpen(!isToursOpen)
    }
    return (
        <>
            <ul className={styles.dropdown}>
                {directions.map((item) => {
                    return (
                        <li key={item.name}>
                            <Link to={{ pathname: `/${item.city}`, state: { direction: item } }}>{item.name}</Link>
                        </li>
                    )
                })}
                <li className={styles.dropdownAuthorTours} onMouseEnter={toggleTours}>Авторские туры<img src="src/assets/icons/arrowDown.svg" ></img></li>
                {isToursOpen &&
                    <ul className={styles.toursDropdown}>
                        {authorTours.map((item) => {
                            return (
                                <li key={item.name}><a href={item.link}>{item.name}</a>
                                </li>
                            )
                        }
                        )}
                    </ul>
                }
            </ul >
        </>
    )
}

export default Directions