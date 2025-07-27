import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "92755f9b-c808-4d81-993b-7efdf1b883ae");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!", 
                text: "Message sent successfully!", 
                icon: "success"
            });
            event.target.reset();
        } else {
            console.log("Error", data);
        }
    };

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Name</label>
                    <input type="text" className="field" placeholder='Enter your name' name='name' required/>
                </div>
                <div className='input-box'>
                    <label>Email Address</label>
                    <input type="text" className="field" placeholder='Enter your email address' name='email' required/>
                </div>
                <div className='input-box'>
                    <label>Your Message</label>
                    <textarea name='message' className='field mess' placeholder="Enter your message" required></textarea>
                </div>
                <button className="submit">Send Message</button>
            </form>
        </section>
    );
}

export { Contact }; 