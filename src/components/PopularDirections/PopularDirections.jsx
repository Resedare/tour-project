import Container from '@components/Container/Container';
import Button from '@components/Button/Button';
import styles from './PopularDirections.module.scss';
import { useTours } from "@hooks/useTours";
import { Link } from 'react-router-dom';

const PopularDirections = () => {
    const { directions } = useTours();
    return (
        <Container className={styles.main}>
            <h2 className={styles.mainTitle}>Популярные направления</h2>
            <p className={styles.mainDescription}>Проводим индивидуальные и групповые экскурсии на русском языке</p>
            <div className={styles.mainDirectionsList}>
                {directions.map((item) => {
                    return (
                        <Link style={{ backgroundImage: `url(${item.img})` }} className={styles.mainDirectionsItem} key={item.city} to={{ pathname: `/${item.city}`, state: { direction: item } }}>
                            <h3 className={styles.mainDirectionsItemTitle}>{item.name}</h3>
                            <Button className={styles.mainDirectionsItemAmount}>{item.tours.length} экскурсий</Button>
                        </Link>

                    )
                })}

            </div>
        </Container>
    )
}

export default PopularDirections