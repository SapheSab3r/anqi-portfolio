import React from 'react';
import './About.scss';
import photo from '../../images/photo.jpg'
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";


export default function About() {
  return (
    <section className='about' id='about'>
      <div className="about-container" data-bg-about="ABOUT">
        <div className="heading">Get to Know Me</div>

        <div className="info">
          <div className="info-button">
            <div className="info-container">
              <p>
                Hi, my name is <span className='bold'> Anqi Chen(She/her) </span>.
                I enjoy creating things that live on the internet. My interest in web development started back in winter break during my sophomore year when I decided to try out building an online portfolio, and now, I am immersed in the wonderful sea of web coding, unable to extricate myself! I am planning to study courses related to <br></br> front-end development and UI/UX.
                <br></br>
                Thank you for checking my website! This is a collection of projects that I am working on or have worked on. Please feel free to look around!
              </p>

          </div>

          <Link to='/aboutPage' smooth className='view-more'>View More</Link>
          </div>

          <img className="photo" src={photo} alt="React Logo" />
          <div className="frame"></div>

        </div>
            

      </div>
      
      
    </section>
  )
}
