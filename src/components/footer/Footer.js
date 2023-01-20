import React from 'react';
import './Footer.scss';
import { FaEnvelope,  FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="large-text">Let's <span>Connect</span>!</div>
        <div className="connect">Email  </div> <FaEnvelope size='1.4rem' />
        <div className="connect">Linkedln  </div> <FaLinkedin size='1.4rem'/>
        <div className="my-name">Anqi Chen 2023</div>
      </div>
    </div>
  )
}

