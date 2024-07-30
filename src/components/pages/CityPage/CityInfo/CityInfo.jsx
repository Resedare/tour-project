import React from 'react';
import styles from './CityInfo.module.scss'

const cityInfo = () => {
    return (
        <>
            <div className={styles.cityInfo}>
                <div className={styles.cityInfoTours}>
                    <div className={styles.cityInfoToursTitle}>Экскурсии в Санкт-Петербурге</div>
                    <div className={styles.cityInfoToursDescription}>
                        <p>Санкт-Петербург — второй по значимости город России после Москвы, культурная столица страны и один из самых красивых городов мира. Ежегодно Питер посещают несколько миллионов туристов, в том числе из зарубежных стран.</p>
                        <p>Гостей привлекают белые ночи, легендарные музеи и дворцы, архитектурные шедевры, каналы и разводные мосты. Произведениями искусства можно смело считать целые кварталы этого прекрасного города. Но за великолепным фасадом скрывается стальной характер Петербурга, что не раз было доказано временем. Этот дух можно почувствовать, гуляя по историческим местам, посещая множество интересных выставок.</p>
                        <p>Мы расскажем, зачем и когда ехать в Город на Неве, что здесь обязательно стоит посмотреть, какие памятные сувениры купить, также вы узнаете об интереснейших событиях, на которые можно отправиться в городе и из него.</p>
                    </div>
                </div>
                <div className={styles.cityInfoArrive}>
                    <img src="src/assets/images/CityInfo.jpg" alt="" />
                    <div className={styles.cityInfoArriveBlock}>
                        <div className={styles.cityInfoArriveTitle}>Когда лучше <br />приезжать в Петербург?</div>
                        <div className={styles.cityInfoArriveDescription}>
                            <p>Город прекрасен в любое время года. Летние прогулки белыми ночами невероятно романтичны, прогулки осенью окутаны тёплым золотом листопада. Зимой город сказочно прекрасен в снежном одеянии, а весной словно рождается заново с первым ледоходом на реке Неве и началом сезона разводных мостов.</p>
                            <p>Зимой город сказочно прекрасен в снежном одеянии, а весной словно рождается заново с первым ледоходом на реке Неве и началом сезона разводных мостов</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cityInfoWhich}>
                    <div className={styles.cityInfoWhichTitle}>Какие экскурсии<br />выбрать в Санкт-Петербурге?</div>
                    <div className={styles.cityInfoWhichDescription}>На сайте доступно свыше тысячи экскурсий как по Санкт-Петербургу,<br />так и по Ленинградской области</div>
                    <div className={styles.cityInfoWhichFromTo}>
                        <div className={styles.cityInfoWhichFromToItem}>
                            <img src="src/assets/images/cityInfoWhich.png" alt="" />
                            <div className={styles.cityInfoWhichFromToItemBlock}>
                                <p className={styles.cityInfoWhichFromToItemBlockTop}>от</p>
                                <p className={styles.cityInfoWhichFromToItemBlockBottom}>классических экскурсий в знаменитые музеи и роскошные дворцы до романтических прогулок по городским крышам и дворам</p>
                            </div>
                        </div>
                        <div className={styles.cityInfoWhichFromToItem}>
                            <img src="src/assets/images/cityInfoWhich2.png" alt="" />
                            <div className={styles.cityInfoWhichFromToItemBlock}>
                                <p className={styles.cityInfoWhichFromToItemBlockTop}>до</p>
                                <p className={styles.cityInfoWhichFromToItemBlockBottom}>традиционных экскурсий на автобусе или теплоходе до необычных прогулок на сегвее, мотоцикле или sup-серфе.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cityInfoWhichGuides}>
                        <img src="src/assets/images/cityInfoWhich3.png" alt="" />
                        <div className={styles.cityInfoWhichGuidesBlock}>
                            <div className={styles.cityInfoWhichGuidesBlockTitle}>Наши профессиональные гиды
                            </div>
                            <div className={styles.cityInfoWhichGuidesBlockDescription}>поделятся с вами удивительными историями Петербурга
                                и его знаменитых жителей, покажут популярные места и незнакомые уголки города, откроют тайны петербургской архитектуры и оживят исторические страницы улиц и площадей. Наши профессиональные гиды поделятся с вами удивительными историями Петербурга и его знаменитых жителей, покажут популярные места и незнакомые уголки города, откроют тайны петербургской архитектуры и оживят исторические страницы улиц и площадей.
                            </div>
                        </div>
                    </div>
                    <div className={styles.cityInfoWhichFaq}>
                        <div className={styles.cityInfoWhichFaqTitle}>Популярные вопросы</div>
                        <div className={styles.cityInfoWhichFaqItems}>
                            <div className={styles.cityInfoWhichFaqItem}>
                                <div className={styles.cityInfoWhichFaqItemQuestion}>Когда лучше приезжать в Санкт-Петербург?</div>
                                <div className={styles.cityInfoWhichFaqItemAnswer}>
                                    <p>В Северную столицу можно ехать в любое время года, в каждое из них город по-особенному прекрасен. Но всё-таки высоким туристическим сезоном считается лето в период белых ночей, майские и новогодние каникулы.</p>
                                    <p>
                                        Белые ночи здесь можно наблюдать с конца мая до середины июля. Лето в Питере — это не только белые ночи, но и множество интересных экскурсий, фестивалей, пешие прогулки и работающие фонтаны Петергофа. Зимой здесь холодно и ветрено, но менее многолюдно в музеях и на выставках,
                                        да и билеты на многие мероприятия стоят дешевле.</p>
                                </div>
                            </div>
                            <div className={styles.cityInfoWhichFaqItem}>
                                <div className={styles.cityInfoWhichFaqItemQuestion}>Что привезти из Санкт-Петербурга в подарок?</div>
                                <div className={styles.cityInfoWhichFaqItemAnswer}>
                                    <p>В Северную столицу можно ехать в любое время года, в каждое из них город по-особенному прекрасен. Но всё-таки высоким туристическим сезоном считается лето в период белых ночей, майские и новогодние каникулы.</p>
                                    <p>
                                        Белые ночи здесь можно наблюдать с конца мая до середины июля. Лето в Питере — это не только белые ночи, но и множество интересных экскурсий, фестивалей, пешие прогулки и работающие фонтаны Петергофа. Зимой здесь холодно и ветрено, но менее многолюдно в музеях и на выставках,
                                        да и билеты на многие мероприятия стоят дешевле.</p>
                                </div>
                            </div>
                            <div className={styles.cityInfoWhichFaqItem}>
                                <div className={styles.cityInfoWhichFaqItemQuestion}>Сколько добираться до Санкт-Петербурга из Москвы?</div>
                                <div className={styles.cityInfoWhichFaqItemAnswer}>
                                    <p>В Северную столицу можно ехать в любое время года, в каждое из них город по-особенному прекрасен. Но всё-таки высоким туристическим сезоном считается лето в период белых ночей, майские и новогодние каникулы.</p>
                                    <p>
                                        Белые ночи здесь можно наблюдать с конца мая до середины июля. Лето в Питере — это не только белые ночи, но и множество интересных экскурсий, фестивалей, пешие прогулки и работающие фонтаны Петергофа. Зимой здесь холодно и ветрено, но менее многолюдно в музеях и на выставках,
                                        да и билеты на многие мероприятия стоят дешевле.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cityInfo