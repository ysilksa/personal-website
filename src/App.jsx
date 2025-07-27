import './App.css'
import { Routes, Route } from 'react-router-dom';

import HomePage  from './pages/homepage/HomePage';
import { AboutMePage } from './pages/aboutpage/AboutMePage';
import { ContactPage } from './pages/contactpage/ContactPage';
import { PortfolioPage } from './pages/portfoliopage/PortfolioPage';

function App() {

  return (
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMePage/>} />
        <Route path="/contactme" element={<ContactPage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
      </Routes>
  )
}

export default App;

