import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="container">
    <h1>
       Contact Us</h1>
    <form action="/contact" method="post">
      <input className="input" type="text" name="name" placeholder="Enter your name"/>
      <input className="input" type="phone" name="phone" placeholder="Enter your phone"/>
      <input className="input" type="email" name="email" placeholder="Enter your email"/>
      <input className="input" type="address" name="address" placeholder="Enter your address"/>
      <textarea className="text" type="desc" cols="30" rows="10" name="desc" placeholder="Describe your query"></textarea>
      <button className="btn">Submit</button>
    </form>
  </div>
  )
}
