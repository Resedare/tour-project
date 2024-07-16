import Container from '../Container/Container';
import Button from '../Button/Button';
import styles from './PopularDirections.module.scss';
import { useTours } from "../hooks/useTours";

const PopularDirections = () => {
    const { directions } = useTours();
    return (
        <Container className={styles.main}>
            <h2 className={styles.mainTitle}>Популярные направления</h2>
            <p className={styles.mainDescription}>Проводим индивидуальные и групповые экскурсии на русском языке</p>
            <div className={styles.mainDirectionsList}>
                {directions.map((item) => {
                    return (
                        <div key={item.city} className={styles.mainDirectionsItem} style={{ backgroundImage: `url(${item.img})` }}>
                            <h3 className={styles.mainDirectionsItemTitle}>{item.name}</h3>
                            <Button className={styles.mainDirectionsItemAmount}>{item.tours.length} экскурсий</Button>
                        </div>
                    )
                })}

            </div>
        </Container>
    )
}

export default PopularDirections