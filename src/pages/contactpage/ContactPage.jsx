
import './ContactPage.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ContactPageLeft } from './ContactPageLeft';
import { Contact } from '../../components/Contact/Contact';

const ContactPage = () => {
    return (
        <div>
            <NavBar/>
            <main>
                <div className='page-container'>
                    <div className='left-half'>
                        <ContactPageLeft/>
                    </div>
                    <Contact/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export { ContactPage };