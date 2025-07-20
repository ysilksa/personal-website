import './AboutMePageTop.css';

const AboutMePageTop = () => {
    return (
        <div>
            <main className='container'>
                <div className='left-half'>
                    <h1>ABOUT ME</h1>
                    <h2>Hi, I'm Isabella!</h2>
                    <p>
                        I’m a current student at Northwestern University studying computer science and data science. My interests fall in the intersection between design and tech, where I believe developing technology should feel intuitive, thoughtful, and fun!
                    </p>
                    <h2>What I'm Working On</h2>
                    <ul>
                        <li>Tailoring my personal portfolio website through React and Vite.</li>
                        <li>Spearheading the UI and design process of an AI-powered mood-based food app.</li>
                        <li>Wireframing a personal project- a weather safety app!</li>
                    </ul>
                    <h2>More About Me</h2>
                    <p>
                        In my free time, I enjoy dancing to sweat off extra stress and express myself artistically! I’m also drawn to the emotional depth of the worlds inside storytelling games, as well as co-op games that emphasize solving challenges through teamwork. 
                    </p>
                    <p>
                        I’m also the person who drinks iced coffee all year (even in winter!), especially when I’m deep in the zone solving bugs or designing with heart.
                    </p>
                </div>
                <div className='right-half'>
                    <img src={`${import.meta.env.BASE_URL}pages/AboutMe.jpg`} alt='not here yet' className='aboutme-image'/>
                </div>
            </main>
        </div>
    );
}

export { AboutMePageTop };