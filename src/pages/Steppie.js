import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './AllProjects.scss'
import Scroll from './Scroll'
import SteppieCover from '../images/SteppieCover.png'
import Svideo from '../video/SteppieFitnessAppDemo.mp4';


export default function Steppie() {
  return (
    <div>
      <Navbar />
      <div  className='main-container' style={{ 
      backgroundImage: `url(${SteppieCover})`,
      height: '90vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    }}>
        <div className="main-cover">
          <Scroll/>
        </div>
        <h2 className="project-name">Steppie Mobile App UI & Character Design</h2>
        <div className="body-container">
          <div className="body-intro">
            <div className="body-left">
              <h3 className="left-heading">Overview</h3>
             
            </div>

            <div className="body-right">
              <h3 >Methods</h3>
              <div className="block-names">
                <div className="block">Prototyping</div>
                <div className="block">Wireframing</div>
                <div className="block">Site Interview</div>
                <div className="block">Research</div>

              </div>

              <div className="body-right">
                <h3 className="title">Tools</h3>
                <div className="block-names">
                  <div className="block">Figma</div>
                  <div className="block">Adobe Photoshop</div>
                  <div className="block">Adobe Illustrator</div>
                </div>

            </div>
          </div>


            </div>
            <div className="body-context">
            <h3 className="title">Video Demo</h3>
            <div  className="video-container">
            <video src={Svideo} width='520px' controls='true' className='video'></video>
            </div>

            </div>
            <div className="body-context">
            <h3 className="title">Reflection</h3>


            </div>
        </div>
      </div>
    </div>
  )



}
