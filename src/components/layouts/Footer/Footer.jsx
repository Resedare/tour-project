import Button from '@components/Button/Button';
import Container from '@components/Container/Container'
import styles from './Footer.module.scss'
import logo from '@assets/icons/logo.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerTop}>
                    <div className={styles.footerTopItem}>
                        <img className={styles.footerTopItemLogo} src={logo} alt="" />
                        <p className={styles.footerTopItemSocial}>Мы в соц-сетях</p>
                        <div className={styles.footerTopItemMedia}>
                            <Button className={styles.footerTopItemMediaBtn}><img src="src/assets/icons/whatsappColored.svg" alt="" /></Button>
                            <Button className={styles.footerTopItemMediaBtn}><img src="src/assets/icons/tgColored.svg" alt="" /></Button>
                            <Button className={styles.footerTopItemMediaBtn}><img src="src/assets/icons/vkColored.svg" alt="" /></Button>
                        </div>
                    </div>
                    <div className={styles.footerTopItem}>
                        <p className={styles.footerTopItemTitle}>Сервис</p>
                        <a href='#' className={styles.footerTopItemLink}>О сервисе</a>
                        <a href='#' className={styles.footerTopItemLink}>Блог</a>
                        <a href='#' className={styles.footerTopItemLink}>FAQ</a>
                        <a href='#' className={styles.footerTopItemLink}>Способ оплаты</a>
                    </div>
                    <div className={styles.footerTopItem}>
                        <p className={styles.footerTopItemTitle}>Гидам</p>
                        <a href='#' className={styles.footerTopItemLink}>Стать гидом</a>
                        <a href='#' className={styles.footerTopItemLink}>Правила работы</a>
                    </div>
                    <div className={styles.footerTopItem}>
                        <p className={styles.footerTopItemTitle}>Документы</p>
                        <a href='#' className={styles.footerTopItemLink}>Политика возврата билетов</a>
                        <a href='#' className={styles.footerTopItemLink}>Договор оферты</a>
                        <a href='#' className={styles.footerTopItemLink}>Условия использования сайта</a>
                        <a href='#' className={styles.footerTopItemLink}>Политика обработки персональных
                            данных</a>
                        <a href='#' className={styles.footerTopItemLink}>Реквизиты</a>
                    </div>
                    <div className={styles.footerTopItem}>
                        <p className={styles.footerTopItemTitle}>Поддержка клиентов</p>
                        <div className={styles.footerTopItemPhone}><img src="src/assets/icons/phone.svg" alt="" /><span>Телефон:</span> <a href="tel:+74951234567">+7 (495) 123-45-67</a></div>
                        <div className={styles.footerTopItemEmail}><img src="src/assets/icons/email.svg" alt="" /><span>E-mail:</span> <a href="mailto:hello@example.ru">hello@example.ru</a></div>
                        <div className={styles.footerTopItemAddress}><img src="src/assets/icons/location.svg" alt="" /><span>Офис:</span> Москва, ул. Название улицы 10, офис 11</div>
                    </div>
                </div>
                <hr />
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomRights}>
                        <p>&copy; {new Date().getFullYear()} Company</p>
                    </div>
                    <div className={styles.footerBottomPartners}>
                        <img src="../src/assets/icons/payments.png" alt="Payments" />
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer