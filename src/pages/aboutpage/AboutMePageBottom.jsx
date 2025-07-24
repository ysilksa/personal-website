import './AboutMePageBottom.css';

const AboutMePageBottom = () => {
    return (
        <div className='page-container'>
            {/* left side with images  */}
            <div id='left-half'>
                <img src={`${import.meta.env.BASE_URL}pages/VolhaKudzinaUnsplash.jpg`} alt='Teacup surrounded by flowers' className='main-image'/>
                <div className='box-shadow'></div>
            </div>

            {/* right side with text  */}
            <div id='right-half'>
                <div>
                    <h1>EXPERIENCE</h1>
                    <ul>
                        <li>
                            Mood Meals - Designed UI for AI-powered app that provides mood-based meal recommendations.
                        </li>
                        <li>
                            Sokana Collective Website Revamp - Engineered modular and responsive UI components for homepage using React & JSX, developed 90% of project documentation using Docusaurus.
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>EDUCATION</h1>
                    <ul>
                        <li>Northwestern University</li>
                        <li>Anticipated graduation: Dec 2026</li>
                        <li>Bachelors of Science in Computer Science</li>
                        <li>Data Science Minor</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { AboutMePageBottom };