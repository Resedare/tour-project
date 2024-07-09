import styles from './Header.module.scss'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
const Header = () => {
    return (
        <Container>
            <Navbar />
            <div className={styles.header}>Header</div>
        </Container>
    )
}

export default Header