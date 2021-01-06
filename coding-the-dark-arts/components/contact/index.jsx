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
      <form id='contact' className='contact-form' onSubmit={sendEmail}>
        <h1 className='contact-title'>Contact Us</h1>
        <div className='contact-flex'>
          <div className='contact-elem'>
            <input className='contact-input' type='text' placeholder='Name' name='name' />
          </div>
          <div className='contact-elem'>
            <input
              className='contact-input'
              type='email'
              placeholder='Email Address'
              name='email'
            />
          </div>
          <div className='contact-elem'>
            <input className='contact-input' type='text' placeholder='Subject' name='subject' />
          </div>
          <div className='contact-elem'>
            <textarea
              placeholder=' Your message'
              name='message'
              className='contact-textarea'
            ></textarea>
          </div>
          <div className='submit-contact'>
            <input className='contact-send' type='submit' value='Send Message'></input>
          </div>
        </div>
        {emailStatus && <p className='contact-success'>Thanks for reaching out!</p>}
      </form>
    </div>
  );
}
