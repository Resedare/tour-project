import React from 'react'
import './Header.scss'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
const Header = () => {
    return (
        <Container>
            <Navbar />
            <div className='header'>Header</div>
        </Container>
    )
}

export default Header