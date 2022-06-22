import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    // Adjusting the height using useRef hook in a useEffect
    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (showLinks){
            linksContainerRef.current.style.height =`${linksHeight}px`
        }else{
            linksContainerRef.current.style.height = '0px'
        }
    },[showLinks])

    return <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="logo" />
                <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                    <FaBars />
                </button>
            </div>


            {/* This method technically works but its just mounting and unmounting so we can't add animation */}
            {/* {showLinks && <div className="links-container  show-container" >
                <ul className="links">
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>} */}


            {/* This method still requires css values to be hard coded */}
            {/* <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`} ></div> */}


            <div className="links-container  show-container" ref={linksContainerRef} >
                <ul className="links" ref={linksRef}>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <ul className="social-icons">
                {social.map((socialIcon) => {
                    const { id, url, icon } = socialIcon;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
}

export default Navbar