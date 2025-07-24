import React from 'react';
import './AboutMePage.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { AboutMePageTop } from './AboutMePageTop';
import { AboutMePageBottom } from './AboutMePageBottom';

const AboutMePage = () => {
    return (
        <div>
            <NavBar/>
            <main>
                {/* image header */}
                <div className="headerImageContainer">
                    <img src={`${import.meta.env.BASE_URL}pages/DariLiUnsplash.jpg`} alt='white & purple flowers with a cup of coffee' className='headerImage'/>
                </div>
                <AboutMePageTop/>
                <AboutMePageBottom/>
            </main>
            <Footer/>
        </div>
    );
};

export { AboutMePage }