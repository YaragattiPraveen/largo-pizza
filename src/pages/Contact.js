import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact US</h1>
      <div className='contact_details'>
        <div className='contact_details_card'>
          <p>Toll Free: +1 877 367 6836</p>
          <p>Fax: +1 859 885 1938 California</p>
          <p>Telephone: +1 213 212 5755</p>
        </div>
        <div className='contact_details_card'>
          <p>Corporate Office</p>
          <p>Pizzaovens.com</p>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
        </div>
        <div className='contact_details_card'>
          <p>pby@youdomain.com</p>
          <p>To contact a specific member of our</p>
          <p>staff, Please visit our About Us Page.</p>
        </div>
      </div>
      <iframe title='googlemap' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15132.236191733598!2d73.94773805!3d18.5262336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666460608818!5m2!1sen!2sin"
        style={{
          width: '100%',
          height: '350px',
          border: '0',
          loading: 'lazy',
          referrerpolicy: 'no-referrer-when-downgrade',
          margin: "40px auto"
        }}></iframe>
      <div className='form_container'>
        <form>
          <div className='form_row'>
            <div className='form_label'>
              <label>Full Name</label>
              <input type='text' />
            </div>
            <div className='form_label'>
              <label>Phone Number</label>
              <input type='number' />
            </div>
          </div>
          <div className='form_row'>
            <div className='form_label'>
              <label>Email Address</label>
              <input type='email' />
            </div>
            <div className='form_label'>
              <label>Order Number</label>
              <input type='number' />
            </div>
          </div>
          <div className='form_row'>
            <div className='form_label'>
              <label>Company Name</label>
              <input type='text' />
            </div>
            <div className='form_label'>
              <label>RMA number</label>
              <input type='number' />
            </div>
          </div>
          <div className='form_row'>
            <div className='form_label_textarea'>
              <label>COMMENTS/QUESTIONS</label>
              <textarea rows={6}></textarea>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact