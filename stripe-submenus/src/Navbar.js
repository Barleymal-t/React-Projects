import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
    const {openSidebar, closeSidebar,openSubmenu,closeSubmenu}= useGlobalContext()
    const displaySubmenu = (e)=>{
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center= (tempBtn.left+tempBtn.right)/2
        const bottom = tempBtn.bottom-5
        console.log(tempBtn)
        openSubmenu(page, {center,bottom})
    }

    const handleSubmenu = (e)=>{
if (!e.target.classList.contains('link-btn')){
    closeSubmenu()
}
    }

    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <nav className="nav-center">
                <nav className="nav-header">
                    <img src={logo} className="nav-logo" alt="stripe"/>
                    <button className="btn toggle-btn" onClick={openSidebar}>
                        <FaBars/>
                    </button>
                </nav>
                <ul className="nav-links">
                    <li><button onMouseOver={displaySubmenu} className="link-btn">
                        products</button></li>
                    <li><button onMouseOver={displaySubmenu} className="link-btn">
                        developers</button></li>
                    <li><button onMouseOver={displaySubmenu} className="link-btn">
                        company</button></li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </nav>
        </nav>
    )
}

export default Navbar
