import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div id='footer-left'>
                <h1>Let's Connect!</h1>
                <div className='img-gallery'>
                    <img src='/footer/CoffeeIcon.png' alt='Pixel coffee with latte art' className='footer-img'/>
                    <img src='/footer/CakeIcon.png' alt='Pixel strawberry cake with pink frosting' className='footer-img'/>
                </div>
            </div>
            <div id='footer-right'>
                {/* first batch of links  */}
                <div className='link-list'>

                </div>
                <div className='link-list'>
                    
                </div>
            </div>
        </div>
    );
};

export { Footer };