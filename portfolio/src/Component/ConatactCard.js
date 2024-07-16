import React from 'react';
import './ConatactCard.css';

const ContactCard = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-body">
        <div className="contact-form d-form">
          <h1>Contact</h1>
          <form>
            <div className="form-group">
              <input type="text" className="input n-input" id="name" name="name" placeholder="Your Name..." />
            </div>
            <div className="form-group">
              <input type="email" className="input n-input" id="email" name="email" placeholder="Your E-mail..." />
            </div>
            <div className="form-group">
              <textarea className="textarea t-input" id="message" name="message" placeholder="Your Message..."></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="contact-button c-btn">Send Message Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
