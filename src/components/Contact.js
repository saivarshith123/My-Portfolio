import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Let's Build Something Amazing</h2>
      <p>
        Have a project in mind or just want to say hello? My inbox is always open.
      </p>
      <a href="mailto:youremail@example.com" className="email-button">
        Say Hello
      </a>
    </div>
  );
};

export default Contact;
