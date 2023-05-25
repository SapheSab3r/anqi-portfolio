import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Scroll from './Scroll';
import Assets from '../images/PvsZ/Assets.png';
import Logistic from '../images/PvsZ/logistic.png';
import Structure from '../images/PvsZ/structure.png';
import Code from '../images/PvsZ/code.png'
import Pvideo from '../video/plantsVSzombiesDemo.mp4';



export default function PvsZ() {
  const VideoSrc = Pvideo;
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return (
    <div>
      <Navbar />

      <div className='main-container'>
        <h1 className="project-name">Plants vs. Zombies</h1>
        <div className="summary">
          <div className="col">
            <h3>Duration</h3>
            <p>3 Weeks</p>
            <p>(Individual Project)</p>
          </div>
          <div className="col">
            <h3>Role</h3>
            <p>Backend Developer</p>
          </div>
          <div className="col">
            <h3>Skill</h3>
            <p>Python</p>
          </div>
          <div className="col">
            <h3>Course</h3>
            <p>Fundamentals of Programming</p>
          </div>

        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Overview.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <p>This is the term project for CMU 15-112: Fundamentals of Programming. In this TP, my goal was to rebuild the popular tower-defense game, Plants vs Zombies using Python, the CMU 112 graphics package and the existing PvsZ characters and graphics. The game was originally developed by PopCap Games and published by Electronic Arts. I will make a simplified version of that, which will only include a few types of plants, zombies, and two levels (the day level and the night level). The player's goal is to successfully defeat waves of zombies using the plants that are provided for each level.</p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Planning.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <p>Prior to initiating the coding phase, I developed a comprehensive plan for this game. This plan encapsulated various crucial elements such as potential characters, requisite assets, an effective file structure, and basic logistical considerations.</p>
              <br></br>
              <h3>Assets</h3>
              <img src={Assets} alt="Assets" />
              <br></br>
              <h3>Logistic</h3>
              <img src={Logistic} alt="Logistic" />
              <br></br>
              <h3>Structure</h3>
              <img src={Structure} alt="Structure" />
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Code Snippets.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <p>Presented below are select code excerpts from the project. These include functions dedicated to monitoring mouse interaction with the game board, checking and updating the status of the 'potatobomb' upon contact with a zombie, as well as a timer function. This timer function continuously checks for collisions between zombies and plants, updating their respective statuses across all rows and columns. Each of these functions plays an integral role in ensuring smooth gameplay mechanics, contributing to the overall user experience.</p>

              <br></br>
              <img className="code-img" src={Code} alt="Code Snippets" />
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Video Demo.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <video src={VideoSrc} width='700px' controls='true' className='video'></video>
            </div>
          </div>

        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Reflection.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <p>I split the work into three stages: working-stage (general game elements set up complete and the game is playable with some bugs), MVP (Implementing the corn-catapult and ensuring the Day-Time Mode is complete), and Final Stage (Implementing the Nigh mode and all features are working in the game with no bugs).
              </p>
              <br></br>
              <br></br>
            </div>
          </div>

        </div>

      </div>

    </div>
  )



}
