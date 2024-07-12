import Container from '../Container/Container'
import styles from './PopularDirections.module.scss'
import Button from '../Button/Button'
const POPULAR_DIRECTIONS_DATA = [
    { name: 'Экскурсии в Санкт-Петербурге', city: 'Санкт-Петербург', img: 'src/assets/images/itemBg1.jpg', tours: 15 },
    { name: 'Экскурсии в Стамбуле', city: 'Стамбул', img: 'src/assets/images/itemBg2.jpg', tours: 11 },
    { name: 'Экскурсии в Дубае', city: 'Дубай', img: 'src/assets/images/itemBg3.jpg', tours: 12 },
    { name: 'Экскурсии в Калининграде', city: 'Калининград', img: 'src/assets/images/itemBg4.jpg', tours: 13 },
    { name: 'Экскурсии в Мурманске', city: 'Мурманск', img: 'src/assets/images/itemBg5.jpg', tours: 14 },
]
const PopularDirections = () => {
    return (
        <Container className={styles.main}>
            <h2 className={styles.mainTitle}>Популярные направления</h2>
            <p className={styles.mainDescription}>Проводим индивидуальные и групповые экскурсии на русском языке</p>
            <div className={styles.mainDirectionsList}>
                {POPULAR_DIRECTIONS_DATA.map((item) => {
                    return (
                        <div key={item.city} className={styles.mainDirectionsItem} style={{ backgroundImage: `url(${item.img})` }}>
                            <h3 className={styles.mainDirectionsItemTitle}>{item.name}</h3>
                            <Button className={styles.mainDirectionsItemAmount}>{item.tours} экскурсий</Button>
                        </div>
                    )
                })}

            </div>
        </Container>
    )
}

export default PopularDirections