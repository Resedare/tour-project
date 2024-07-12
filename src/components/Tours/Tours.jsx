import Container from "../Container/Container"
import styles from './Tours.module.scss'

const Tours = () => {
    return (
        <Container className={styles.main}>
            <h2 className={styles.mainTitle}>Экскурсии</h2>
            <div className={styles.mainToursList}>
                <div className={styles.mainToursItem}></div>
            </div>
        </Container>
    )
}

export default Tours