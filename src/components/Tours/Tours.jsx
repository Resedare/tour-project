import Container from "../Container/Container";
import Button from "../Button/Button";
import styles from './Tours.module.scss';

const Tours = () => {
    return (
        <Container className={styles.tours}>
            <div className={styles.toursChoose}>
                <h2 className={styles.toursChooseTitle}>Экскурсии</h2>
                <select className={styles.toursChooseCities} placeholder='Выберите город' name='cities'>
                    <option selected value="" disabled>Выберите город</option>
                    <option className={styles.toursChooseCity} value="Санкт-Петербург">Санкт-Петербург</option>
                    <option className={styles.toursChooseCity} value="Санкт-Петербург">Мурманск</option>
                    <option className={styles.toursChooseCity} value="Санкт-Петербург">Калининград</option>
                </select>
                <input required className={styles.toursChooseDate} placeholder='Выберите дату' type="text" name="date" id="" onFocus={(e) => e.target.type = 'date'} />
            </div>
            <div className={styles.toursList}>
                <div className={styles.toursItem}>
                    <div className={styles.toursItemImage}>
                        <Button className={styles.toursItemLike}><img src="src/assets/icons/likeWhite.svg" alt="" /></Button>
                    </div>
                    <div className={styles.toursItemMain}>
                        <div className={styles.toursItemMainInfo}>
                            <h3 className={styles.toursItemMainInfoTitle}>Энергия северной Венеции: места
                                силы Санкт-Петербурга</h3>
                            <p className={styles.toursItemMainInfoDescription}>Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего дворца и шедевры мастеров Западной Европы.</p>
                            <hr />
                        </div>
                        <div className={styles.toursItemMainFooter}>
                            <div className={styles.toursItemMainFooterLeft}>
                                <p className={styles.toursItemMainFooterPrice}><span className={styles.toursItemMainFooterPriceBold}>от 2750 ₽ / </span>с чел</p>
                                <select className={styles.toursItemMainFooterTime}>
                                    <option value="" disabled selected>Выбрать время</option>
                                    <option value="">с 9:00 до 13:00</option>
                                    <option value="">с 10:00 до 16:00</option>
                                    <option value="">с 12:00 до 16:00</option>
                                    <option value="">с 14:00 до 18:00</option>
                                </select>
                            </div>
                            <div className={styles.toursItemMainFooterRight}>
                                <Button className={styles.toursItemMainFooterAdd}><img src="src/assets/icons/plus.svg" alt="" /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Tours