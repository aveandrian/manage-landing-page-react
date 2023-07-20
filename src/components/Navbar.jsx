import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar(){
    const [isOpened, setIsOpened] = useState(false)

    function toggleIsOpened(){
        setIsOpened(prev => !prev)
    }

    return (
        <nav>
            <div className={`nav-items-bg ${isOpened ? "opened" : ""}`} onClick={toggleIsOpened}></div>
            <img className='logo' src='/images/logo.svg' alt='Logo' />
            <div className={`nav-items ${isOpened ? "opened" : ""}`}>
                <a>Pricing</a>
                <a>Product</a>
                <a>About Us</a>
                <a>Careers</a>
                <a>Community</a>
            </div>
            <img className='menu-btn' src={`/images/icon-${isOpened ? "close" : "hamburger"}.svg`} onClick={toggleIsOpened} alt='Menu button'/>
            <button className='get-started-btn'>Get Started</button>
        </nav>
    )
}