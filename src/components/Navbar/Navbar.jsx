import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import Button from '../Button/Button';

import styles from './Navbar.module.scss';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.navBar}>
                <div className={styles.navLinks}>
                    <img src={logo} alt="Tenloc" />
                    <Button className={`${styles.navLinksItem} ${styles.navLinksDirections}`} onClick={toggleDropdown}>
                        Направления
                        <img src="src/assets/icons/arrowDown.svg" alt="" className={styles.navLinksDirectionsIcon} />
                        {isDropdownOpen && (
                            <Dropdown />
                        )}
                    </Button>

                    <a href="#" className={styles.navLinksItem}>О сервисе</a>
                    <a href="#" className={styles.navLinksItem}>Блог</a>
                    <Button href="#" className={`${styles.navLinksItem} ${styles.navLinksHelp}`}>
                        Помощь клиентам
                        <img src="src/assets/icons/arrowDown.svg" alt="" className={styles.navLinksHelpIcon} />
                    </Button>
                </div>
                <div className={styles.navActions}>
                    <Button className={`${styles.navActionsItem} ${styles.navActionsSearch}`}>
                        <img src="src/assets/icons/search.svg" alt="" />
                    </Button>
                    <Button className={`${styles.navActionsItem} ${styles.navActionsLike}`}>
                        <img src="src/assets/icons/like.svg" alt="" />
                    </Button>
                    <Button className={styles.navActionsLogin}>Войти</Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;