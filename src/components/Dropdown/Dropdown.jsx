import React from 'react'
import styles from './Dropdown.module.scss'
const Dropdown = () => {
    return (
        <>
            <ul className={styles.dropdown}>
                <li><a href="http://vk.com">Объект 1</a></li>
                <li>Объект 2</li>
                <li>Объект 3</li>
                <li>Объект 3</li>
                <li>Объект 3</li>
            </ul>
        </>
    )
}

export default Dropdown