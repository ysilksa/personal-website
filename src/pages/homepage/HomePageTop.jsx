import React from 'react';
import './HomePageTop.css';
import Button from '../../components/Button/Button';

const HomePageTop = () => {
    return (
        <main className='homepagetop-container'>
            <h2>Hello there!</h2>
            <h1>
                I’m Isabella Yan, a computer science student interested in the intersection between tech and design. 
            </h1>
            <p>
                I study computer science at Northwestern University, and am constantly learning best UI practices and refining my technical knowledge.
            </p>
            <Button label='View my portfolio' route='/portfolio'/>
        </main>
    );
};

export { HomePageTop };