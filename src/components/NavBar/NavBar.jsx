import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import Button from '../Button/Button';


const NavBar = () => {
    return (
        <div className='navbar'>
            <div id='navbar-left'>
                <img src='/icon/RabbitIcon.png' alt='Pixelated Rabbit Icon'/>
            </div>
            <div id='navbar-right'>
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/aboutme'>About Me</Link>
                <Button label='Contact Me' route='/contactme'/>
            </div>
        </div>
    );
};

export { NavBar }; 