import React from 'react';
import './HomePage.css';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
    return (
        <div id='home-page'>
            <NavBar/>
            <main className="main-content">{/* content */}</main>
            <Footer/>
        </div>
    );
};