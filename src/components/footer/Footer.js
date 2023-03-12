import React from 'react';
import './Footer.scss';
import { FaEnvelope,  FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="large-text">Let's <span>Connect</span>!</div>
        <a href = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfttqHPhptKgWkvVZwpTLlKxDjsmnldsTfKRRNrjMBjxdQBrmpFMXMbNZfmbZccFwQnsXV" className="connect" target='blank'>Email  </a> <FaEnvelope size='1.4rem' />

        <a href = 'https://www.linkedin.com/in/anqichen24/' className="connect" target='blank'>Linkedln  </a> <FaLinkedin size='1.4rem'/>
        <div className="my-name">Anqi Chen 2023</div>
      </div>
    </div>
  )
}

