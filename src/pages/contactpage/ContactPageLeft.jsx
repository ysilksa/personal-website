import './ContactPageLeft.css';

const ContactPageLeft = () => {
    return (
        <div>
            <h1>Let's get in touch!</h1>
            <div className='contact-methods'>                
                <div className='contact-method'>
                    <h2>Phone</h2>
                    <p>+1 312 218 3028</p>
                </div>

                <div className='contact-method'>
                    <h2>Email</h2>
                    <p>isabellayan831@gmail.com</p>
                    <p>isabellayan2027@northwestern.edu</p>
                </div>

                <div className='contact-method'>
                    <h2>LinkedIn</h2>
                    <a href='https://linkedin.com/in/isabellayan814/'>https://linkedin.com/in/isabellayan814/</a>                    
                </div>
                            
                <div className='contact-method'>
                    <h2>GitHub</h2>
                    <a href='https://github.com/ysilksa'>https://github.com/ysilksa</a>
                </div>
            </div>
        </div>
    );
}

export { ContactPageLeft };