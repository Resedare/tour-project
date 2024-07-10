import styles from './SupportDropdown.module.scss';
import Button from '../Button/Button';


const SupportDropdown = () => {
    return (
        <div className={styles.dropdown}>
            <p>Мы на связи с 09:00 до 21:00 мск</p>
            <div className={styles.dropdownLinks}>
                <Button className={styles.dropdownLinksWhatsApp}><img src="src/assets/icons/whatsapp.svg" alt="WhatsApp icon" />WhatsApp</Button>
                <Button className={styles.dropdownLinksTelegram}><img src="src/assets/icons/tg.svg" alt="TG icon" />Telegram</Button>
            </div>
            <div className={styles.dropdownFooter}>
                <div className={styles.dropdownFooterPhone}><img src="src/assets/icons/phone.svg" alt="" /><a href="tel:+74951234567">+7 (495) 123-45-67</a></div>
                <div className={styles.dropdownFooterEmail}><img src="src/assets/icons/email.svg" alt="" /><a href="mailto:hello@example.ru">hello@example.ru</a></div>
            </div>
        </div>
    )
}

export default SupportDropdown