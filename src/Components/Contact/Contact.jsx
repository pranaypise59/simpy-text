import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='container'>
        <form className="c-form">
  <h2>CONTACT US</h2>
  <p type="Name:"><input placeholder="Write your name here.."></input></p>
  <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
  <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
  <button>Send Message</button>
  <div>
  <br /><br />
    <p className="fa fa-envelope-o">Webophilia@gmail.com</p>
  </div>
</form>
    </div>
  )
}

export default Contact