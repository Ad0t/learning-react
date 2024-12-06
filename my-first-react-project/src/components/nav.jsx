import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSpotify, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fainstagram } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navtop">
                <span className="navtopleft">
                    <a href=""><FontAwesomeIcon className='navtopleft-icons icons' icon={faInstagram} /></a>
                    <a href=""><FontAwesomeIcon className='navtopleft-icons icons' icon={faSpotify} /></a>     
                    <a href=""><FontAwesomeIcon className='navtopleft-icons icons' icon={faLinkedin} /></a>     
                    <a href=""><FontAwesomeIcon className='navtopleft-icons icons' icon={faGithub} /></a>     
                    <h1 className='herotitle'>Lorem</h1>       
                </span>
                <span className="navtopright">
                    <a href="">Contact</a>
                </span>
            </div>


            <div className="navbottom">
                <span className="navbottomleft">
                    <FontAwesomeIcon className='bars-icon icons' icon={faBars} />
                    <img src="" alt="logo" />
                </span>
                <span className="navbottomright">
                    <FontAwesomeIcon className='search-icon icons' icon={faMagnifyingGlass} />
                </span>
            </div>
            
            <div className="navleft"></div>
        </nav>
    )
}