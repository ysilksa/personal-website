import React from 'react';
import './HomePage.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';

import { HomePageTop } from './HomePageTop';
import { HomePageBottom } from './HomePageBottom';

export default function HomePage() {
    return (
        <div id='home-page'>
            <NavBar/>
            <main className="main-content">
                <HomePageTop/>
                <HomePageBottom/>
            </main>
            <Footer/>
        </div>
    );
};