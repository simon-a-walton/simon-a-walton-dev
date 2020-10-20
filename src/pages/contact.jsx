import React from 'react';
import Navbar from '../components/Navbar.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Footer from '../components/Footer.jsx';

const Contact = () => {
  return (
     <>
      <Navbar />
      <h2 className="text-center text-white p-3">Please get in touch if you would like to work with me</h2>
      <div className="container d-flex justify-content-center">

        <div className="row">
          <div className="col-12 py-5">
            <ContactForm />
          </div>
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
