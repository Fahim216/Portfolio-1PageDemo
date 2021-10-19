import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

import fahim from '../../Image/my-bg.png';
import '../Header/Header.css'


const Header = () => {
    return (
        <container className='main'>
            <div id='header' className='d-flex flex-column header '>
                <div>
                    <img className="img-fluid rounded-circle profile-img" src={fahim} alt="" />
                    <h1 className='text-white profile-name'>Fahim Ahmed</h1>
                </div>
                <div className='social-links d-flex flex-columnm ms-3  text-center'>
                    <a href="#" className="twitter p-2"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" className="twitter p-2"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" className="twitter p-2"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" className="twitter p-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#" className="twitter p-2"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
           
            <nav className="nav-menu ">
                <ul>
                    <li className="active"><a href=""><span className='text-white'>Home</span> </a></li>
                    <li><a href=""><span>About</span> </a></li>
                    <li><a href=""><span>Resume</span></a></li>
                    <li><a href=""><span>Portfolio</span></a></li>
                    <li><a href=""><span>Contact</span></a></li>
                </ul>
            </nav>
           
            </div>
        </container>
    );
};

export default Header;