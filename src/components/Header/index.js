import React from "react";
import './style.css'

import  {FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Header() {
        return (
            <header className="container">
                <div className='social-media'>
                    <a  href='https://github.com/DevMarcosEd' className='github-link'>
                        <FaLinkedin/>
                    </a>
                    <a href='https://www.linkedin.com/in/marcos-almeida-651254231/' className='linkedin-link'>
                        <FaGithub/>
                    </a>
                    <a href='https://www.instagram.com/lmarcos_ed/' className='instagram-link'>
                        <FaInstagram/>
                    </a>
                 </div>
                 <div className="content-header">
                    <img className="perfil" alt="perfil"/>
                    <div className="text">Oi, me chamo Marcos Eduardo</div>
                    <div className="text">desenvolvedor web</div>
                 </div>
            </header>
        )
}