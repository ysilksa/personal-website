import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer'>
            <div id='footer-left'>
                <h1>Let's Connect!</h1>
                <div className='img-gallery'>
                    <img src='/footer/CoffeeIcon.png' alt='Pixel coffee with latte art' className='footer-img'/>
                    <img src='/footer/CakeIcon.png' alt='Pixel strawberry cake with pink frosting' className='footer-img'/>
                    <img src='/footer/ComputerIcon.png' alt='Pixel pink computer' className='footer-img'/>
                </div>
            </div>
            <div id='footer-right'>
                {/* first batch of links  */}
                <div className='link-list'>
                    <h2>Navigation</h2>
                    <Link to='/'>Home</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/aboutme'>About Me</Link>
                    <Link to='/contactme'>Contact Me</Link>
                </div>
                <div className='link-list'>
                    <h2>Contact</h2>
                    <a href="mailto:isabellayan831@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/isabellayan814/">LinkedIn</a>
                    <a href="https://github.com/ysilksa">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export { Footer };