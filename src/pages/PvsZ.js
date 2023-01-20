import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './AllProjects.scss';
import Scroll from './Scroll';
import PvsZCover from '../images/PvsZCover.png';
import Pvideo from '../video/plantsVSzombiesDemo.mp4';


export default function PvsZ() {
  const VideoSrc = Pvideo;

  return (
    <div>
      <Navbar />
      <div className='main-container' style={{ 
      backgroundImage: `url(${PvsZCover})`,
      height: '95vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    }}>
        <div className="main-cover">
          <Scroll/>
        </div>
        <h2 className="project-name">Plants Vs Zombies Clone</h2>
        <div className="body-container">
          <div className="body-intro">
            <div className="body-left">
              <h3 className="left-heading">Overview</h3>
            This is the term project for CMU 15-112: Fundamentals of Programming. In this TP, my goal was to rebuild the popular tower-defense game, Plants vs Zombies using Python, the CMU 112 graphics package and the existing PvsZ characters and graphics. The game was originally developed by PopCap Games and published by Electronic Arts. I will make a simplified version of that, which will only include a few types of plants, zombies, and two levels (the day level and the night level). The player's goal is to successfully defeat waves of zombies using the plants that are provided for each level.
            </div>

            <div className="body-right">
            <h3 >Method</h3>
            <div className="block-names">
              <div className="block">Full-Stack Development</div>

            </div>

          </div>


            </div>
            <div className="body-context">
            <h3 className="title">Video Demo</h3>
            <div  className="video-container">
            <video src={VideoSrc} width='720px' controls='true' className='video'></video>
            </div>


            </div>
            <div className="body-context">
            <h3 className="title">Reflection</h3>
            <div>
            It took me around two weeks to complete this project. 

            </div>
            


            </div>
        </div>
      </div>
    </div>
  )



}
