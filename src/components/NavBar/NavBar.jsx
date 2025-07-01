import React from 'react';
import './NavBar.css';
import Button from '../Button/Button';


const NavBar = () => {
    return (
        <div className='navbar'>
            <div id='navbar-left'>
                <img src='/icon/RabbitIcon.png' alt='Pixelated Rabbit Icon'/>
            </div>
            <div id='navbar-right'>
                <a href='/home'>Home</a>
                <a href='/portfolio'>Portfolio</a>
                <a href='/aboutme'>About Me</a>
                <Button label='Contact Me' />
            </div>
        </div>
    );
};

export { NavBar }; 