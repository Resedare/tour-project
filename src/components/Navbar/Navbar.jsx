import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import Button from '../Button/Button';
import styles from './Navbar.module.scss';
import Directions from '../Directions/Directions';
import SupportDropdown from '../SupportDropdown/SupportDropdown';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const toggleSupportDropdown = () => {
        setIsSupportDropdownOpen(!isSupportDropdownOpen);
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.navBar}>
                <div className={styles.navLinks}>
                    <img src={logo} alt="Tenloc" />
                    <div className={`${styles.navLinksItem} ${styles.navLinksDirections}`} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        Направления
                        <img src="src/assets/icons/arrowDown.svg" alt="" className={styles.navLinksDirectionsIcon} />
                        {isDropdownOpen && (
                            <Directions />
                        )}
                    </div>

                    <a href="#" className={styles.navLinksItem}>О сервисе</a>
                    <a href="#" className={styles.navLinksItem}>Блог</a>
                    <div href="#" className={`${styles.navLinksItem} ${styles.navLinksSupport}`} onMouseEnter={toggleSupportDropdown} onMouseLeave={toggleSupportDropdown}>
                        Помощь клиентам
                        <img src="src/assets/icons/arrowDown.svg" alt="" className={styles.navLinksSupportIcon} />
                        {isSupportDropdownOpen && (
                            <SupportDropdown />
                        )}
                    </div>
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