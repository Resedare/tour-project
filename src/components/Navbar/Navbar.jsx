import React from 'react'
import logo from '../../assets/icons/logo.svg'
import './Navbar.scss'
import Button from '../Button/Button'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-bar'>
                <div className="nav-links">
                    <img src={logo} alt="Tenloc" />
                    <Button className="nav-links-item nav-links-directions">Направления<img src="src/assets/icons/arrowDown.svg" alt="" className='nav-links-directions--icon' /></Button>
                    <a href="" className="nav-links-item">О сервисе</a>
                    <a href="" className="nav-links-item">Блог</a>
                    <Button href="" className="nav-links-item nav-links-help">Помощь клиентам<img src="src/assets/icons/arrowDown.svg" alt="" className='nav-links-help--icon' /></Button>
                </div>
                <div className="nav-actions">
                    <Button className="nav-actions-item nav-actions-search"><img src="src/assets/icons/search.svg" alt="" /></Button>
                    <Button className="nav-actions-item nav-actions-like"><img src="src/assets/icons/like.svg" alt="" /></Button>
                    <Button className="nav-actions-item nav-actions-login">Войти</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar