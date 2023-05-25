import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import './AllProjects.scss';
import Assets from '../images/PvsZ/Assets.png';
import Logistic from '../images/PvsZ/logistic.png';
import Structure from '../images/PvsZ/structure.png';


export default function Voad() {
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
        <h1 className="project-name">A FULLY AUTONOMOUS CAR. DRIVEN BY VOICE USER INTERFACE</h1>
        <div className="summary">
          <div className="col">
            <h3>Duration</h3>
            <p>3 Weeks</p>
            <p>(Group Project of 3)</p>
          </div>
          <div className="col">
            <h3>Role</h3>
            <p>UX Designer</p>
            <p>Researcher</p>
          </div>
          <div className="col">
            <h3>Tool</h3>
            <p>Figma</p>
            <p>Voiceflow</p>
          </div>
          <div className="col">
            <h3>Course</h3>
            <p>Interaction Design Overview</p>
          </div>

        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Overview.</h2>
          </div>

          <div className="body-right">
            <div className="para">
            <h3>VOAD: Voice Operated Assistant for Delivery</h3>
              <br></br>
              <p>The CUI (Conversational User Interface) allows user to control various aspect of the vehicles, monitor its performance and receive real-time information about the trip. Through a series of user research and analysis , we were able to create real life scenarios, anticipate possible situations, and response to user’s need better. With the help of journey map and usability test, we put more consideration into what is probable situation and what is possible situation. After a series of iterations, we created engaging and supportive CUI for our delivery driver Kai. </p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Research.</h2>
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
            <h2 className="left-heading">Video Demo.</h2>
          </div>

          <div className="body-right">
            <div className="para">

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
              <p>It took me around two weeks to complete this project. I split the work into three stages: working-stage (general game elements set up complete and the game is playable with some bugs), MVP (Implementing the corn-catapult and ensuring the Day-Time Mode is complete), and Final Stage (Implementing the Nigh mode and all features are working in the game with no bugs).
              </p>
            </div>
          </div>

        </div>

      </div>


    </div>
  )



}
