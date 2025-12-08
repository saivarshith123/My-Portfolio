import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/Contact.css'; //

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tnj364h',    // Paste your Service ID here
        'template_qu7s6dh',   // Paste your Template ID here
        form.current,
        '1VDhaKDPh0GG5y_w2'     // Paste your Public Key here
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          e.target.reset(); // Clears the form after sending
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="from_name" required placeholder="Your Name" />

        <label>Email</label>
        <input type="email" name="from_email" required placeholder="Your Email" />

        <label>Message</label>
        <textarea name="message" required placeholder="Your Message" />

        <button type="submit" className="email-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
