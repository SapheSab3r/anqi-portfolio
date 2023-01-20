import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './AllProjects.scss'
import Scroll from './Scroll'
import Web1Cover from '../images/Web1Cover.png'


export default function WebsiteV1() {
  return (
    <div>
      <Navbar />
      <div  className='main-container' style={{ 
      backgroundImage: `url(${Web1Cover})`,
      height: '95vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    }}>
        <div className="main-cover">
          <Scroll/>
        </div>
        <h2 className="project-name">Personal Website Version 1</h2>
        <div className="body-container">
          <div className="body-intro">
            <div className="body-left">
              <h3 className="left-heading">Overview</h3>
             
            </div>

            <div className="body-right">
              <h3 >Methods</h3>
              <div className="block-names">
                <div className="block">Wireframing</div>
                <div className="block">Front-end Development</div>

              </div>

              <div className="body-right">
                <h3 className="title">Tools</h3>
                <div className="block-names">
                  <div className="block">VS Code</div>
                  <div className="block">Adobe Photoshop</div>
                </div>

            </div>
          </div>


            </div>
            <div className="body-context">
            <h3 className="title">Visit the Website</h3>

            </div>
            <div className="body-context">
            <h3 className="title">Reflection</h3>


            </div>
        </div>
      </div>
    </div>
  )



}
