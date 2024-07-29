import React from 'react';
import styles from './CityInfo.module.scss'

const CityInfo = () => {
    return (
        <>
            <div className={styles.CityInfo}>
                <div className={styles.CityInfoTours}>
                    <div className={styles.CityInfoToursTitle}>Экскурсии в Санкт-Петербурге</div>
                    <div className={styles.CityInfoToursDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, maxime! Corporis molestias totam quas dolores, tenetur laborum aliquam velit beatae cupiditate exercitationem, consequuntur sint voluptate iure id commodi earum quo?
                        Sit neque deleniti ab similique culpa voluptate assumenda quasi ex eaque laboriosam, perferendis iste quod at repudiandae dignissimos, placeat saepe rerum enim quisquam quam ducimus numquam error? Id, cupiditate repudiandae.</div>
                </div>
                <div className={styles.CityInfoArrive}>
                    <img src="src/assets/images/cityInfo.jpg" alt="" />
                    <div className={styles.CityInfoArriveBlock}>
                        <div className={styles.CityInfoArriveTitle}>Когда лучше приезжать в Петербург?</div>
                        <div className={styles.CityInfoArriveDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolore, dolorum iure earum doloribus facere tenetur inventore soluta voluptatum maxime odit voluptatem hic consequuntur dignissimos et neque. Vitae, ad perspiciatis.
                            Mollitia a modi earum excepturi autem nesciunt soluta atque qui et? Amet est sit quam nostrum sequi, cupiditate quae hic error optio corporis quas suscipit totam, nemo, facere dolore blanditiis!</div>
                    </div>
                </div>
                <div className={styles.CityInfoWhich}>
                    <div className={styles.CityInfoWhichTitle}>Какие экскурсии
                        выбрать в Санкт-Петербьурге?</div>
                    <div className={styles.CityInfoWhichDescription}>На сайте доступно свыше тысячи экскурсий как по Санкт-Петербургу,
                        так и по Ленинградской области</div>
                    <div className={styles.CityInfoWhichFromTo}>
                        <div className={styles.CityInfoWhichFromToItem}>
                            <img src="src/assets/images/cityInfoWhich1.jpg" alt="" />
                            <div className={styles.CityInfoWhichFromToItemBlock}>
                                <p className={styles.CityInfoWhichFromToItemBlockTop}>от</p>
                                <p className={styles.CityInfoWhichFromToItemBlockBottom}>классических экскурсий в знаменитые музеи и роскошные дворцы до романтических прогулок по городским крышам и дворам</p>
                            </div>
                        </div>
                        <div className={styles.CityInfoWhichFromToItem}>
                            <img src="src/assets/images/cityInfoWhich2.jpg" alt="" />
                            <div className={styles.CityInfoWhichFromToItemBlock}>
                                <p className={styles.CityInfoWhichFromToItemBlockTop}>до</p>
                                <p className={styles.CityInfoWhichFromToItemBlockBottom}>традиционных экскурсий на автобусе или теплоходе до необычных прогулок на сегвее, мотоцикле или sup-серфе.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.CityInfoWhichGuides}>
                        <img src="src/assets/images/cityInfoWhich3.jpg" alt="" />
                        <div className={styles.CityInfoWhichGuidesBlock}>
                            <div className={styles.CityInfoWhichGuidesBlockTitle}>Наши профессиональные гиды
                            </div>
                            <div className={styles.CityInfoWhichGuidesBlockDescription}>поделятся с вами удивительными историями Петербурга
                                и его знаменитых жителей, покажут популярные места и незнакомые уголки города, откроют тайны петербургской архитектуры и оживят исторические страницы улиц и площадей. Наши профессиональные гиды поделятся с вами удивительными историями Петербурга и его знаменитых жителей, покажут популярные места и незнакомые уголки города, откроют тайны петербургской архитектуры и оживят исторические страницы улиц и площадей.
                            </div>
                        </div>
                    </div>
                    <div className={styles.CityInfoWhichFaq}>
                        <div className={styles.CityInfoWhichFaqTitle}>Популярные вопросы</div>
                        <div className={styles.CityInfoWhichFaqItems}>
                            <div className={styles.CityInfoWhichFaqItem}>
                                <div className={styles.CityInfoWhichFaqItemQuestion}>Когда лучше приезжать в Санкт-Петербург?</div>
                                <div className={styles.CityInfoWhichFaqItemAnswer}>
                                    <p>В Северную столицу можно ехать в любое время года, в каждое из них город по-особенному прекрасен. Но всё-таки высоким туристическим сезоном считается лето в период белых ночей, майские и новогодние каникулы.</p>
                                    <p>
                                        Белые ночи здесь можно наблюдать с конца мая до середины июля. Лето в Питере — это не только белые ночи, но и множество интересных экскурсий, фестивалей, пешие прогулки и работающие фонтаны Петергофа. Зимой здесь холодно и ветрено, но менее многолюдно в музеях и на выставках,
                                        да и билеты на многие мероприятия стоят дешевле.</p>
                                </div>
                            </div>
                            <div className={styles.CityInfoWhichFaqItem}>
                                <div className={styles.CityInfoWhichFaqItemQuestion}>Что привезти из Санкт-Петербурга в подарок?</div>
                                <div className={styles.CityInfoWhichFaqItemAnswer}>
                                    <p>В Северную столицу можно ехать в любое время года, в каждое из них город по-особенному прекрасен. Но всё-таки высоким туристическим сезоном считается лето в период белых ночей, майские и новогодние каникулы.</p>
                                    <p>
                                        Белые ночи здесь можно наблюдать с конца мая до середины июля. Лето в Питере — это не только белые ночи, но и множество интересных экскурсий, фестивалей, пешие прогулки и работающие фонтаны Петергофа. Зимой здесь холодно и ветрено, но менее многолюдно в музеях и на выставках,
                                        да и билеты на многие мероприятия стоят дешевле.</p>
                                </div>
                            </div>
                            <div className={styles.CityInfoWhichFaqItem}>
                                <div className={styles.CityInfoWhichFaqItemQuestion}>Сколько добираться до Санкт-Петербурга из Москвы?</div>
                                <div className={styles.CityInfoWhichFaqItemAnswer}>
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

export default CityInfo