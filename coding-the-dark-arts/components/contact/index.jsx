import React from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

// console.log(SERVICE_ID, USER_ID);

export default function ContactForm() {
  const [emailStatus, setEmailStatus] = React.useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(`${SERVICE_ID}`, 'template_wz639m8', e.target, `${USER_ID}`).then(
      result => {
        console.log(result.text);
        setEmailStatus(true);
      },
      error => {
        console.log(error.text);
      },
    );

    e.target.reset();
  }

  return (
    <div className='contact-wrapper'>
      <form className='contact-form' id='contact' onSubmit={sendEmail}>
        <h1 className='contact-title'>Contact Us</h1>
        <div className='contact-flex'>
          <div className='contact-elem'>
            <input className='contact-input' name='name' placeholder='Name' type='text' />
          </div>
          <div className='contact-elem'>
            <input
              className='contact-input'
              name='email'
              placeholder='Email Address'
              type='email'
            />
          </div>
          <div className='contact-elem'>
            <input className='contact-input' name='subject' placeholder='Subject' type='text' />
          </div>
          <div className='contact-elem'>
            <textarea className='contact-textarea' name='message' placeholder=' Your message' />
          </div>
          <div className='submit-contact'>
            <input className='contact-send' type='submit' value='Send Message' />
          </div>
        </div>
        {emailStatus && <p className='contact-success'>Thanks for reaching out!</p>}
      </form>
    </div>
  );
}
