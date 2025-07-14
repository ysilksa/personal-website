import React from 'react';
import './HomePageBottom.css'

const HomePageBottom = () => {
    return (
        <main className='homepagebottom-container'>
            <h1>Technical Skill Set</h1>
            <div className='skill-gallery'>
                <div className='skill-container'>
                    <h2>Languages</h2>
                    <p>Java, JavaScript, C, C++, Python, HTML, CSS, SQL</p>
                </div>
                <div className='skill-container'>
                    <h2>Frameworks</h2>
                    <p>React, React + Vite, Node.js, Next.js</p>
                </div>
                <div className='skill-container'>
                    <h2>Tools</h2>
                    <p>Figma, Git, GitHub, Docusaurus</p>
                </div>
            </div>
        </main>
    );
}

export { HomePageBottom }; 