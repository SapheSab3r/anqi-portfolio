import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import './AllProjects.scss';
import Kai from '../images/Voad/Kai.png';
import Route from '../images/Voad/route.png';
import Journey from '../images/Voad/Journey.png';
import Milestone3 from '../mp3/milestone3.mp3';
import Milestone2 from '../mp3/milestone2.mp3';
import Milestone1 from '../mp3/milestone1.mp3';
import M011 from '../images/Voad/01';


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
            <h3>Skill</h3>
            <p>User Flows and Interaction Design</p>
            <p>Information Architecture</p>
            <p>Accessibility Design</p>
          </div>
          <div className="col">
            <h3>Tool</h3>
            <p>Figma</p>
            <p>Voiceflow</p>
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
            <h2 className="left-heading">Persona.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <h3>Kai Ramos</h3>
              <br></br>
              <img id="kai-img" src={Kai} alt="An image of Kai Ramos" />
              <p>Profession: Food and Grocery Deliverer</p>
              <br></br>
              <p>Kai Ramos was laid off at the start of the COVID-19 pandemic and began working for a variety of online food ordering and delivery platforms to make a living. Because this is now Kai's primary form of income, she wants to make the most out of the time she has each day. Kai loves her autonomous SUV named "Sparky" and enjoys being on the road because she can multi-task, read, or watch movies. Scenario At the end of a long day, Kai finds that there is a large catering delivery available. The drive is 45 minutes from the caterer to the delivery address and although tired, Kai realizes this is a great opportunity to make the most of the trip and find other deliveries to make along the way.</p>
              <br></br>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Brainstorming.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <h3>Plotting Route</h3>
              <br></br>
              <p>During the brainstorming process, I decided to visualize all the delivery points on an actual map of Pittsburgh. This approach assisted me in hypothesizing various solutions that the user, Kai, might undertake during her 45-minute delivery task.</p>
              <img src={Route} alt="Screenshot of Google map of Pittsburgh displaying all delivery points" />

              <h3>Milestones</h3>
              <br></br>
              <h4>Milestone 01 - Beginning</h4>
              <p>At the beginning, Kai asks the CUI about the number of deliveries she has today and the estimated time to get through all the delivery points.</p>
              <br></br>
              <h4>Milestone 02 - Middle</h4>
              <p>Due to the Saturday night market, there will be a change in route around the squirrel hill area. The voice assistant will update Kai with the change in route(time, speed, or delivery stop). The voice assistance will also ask Kai the confirmation of the route change. Kai might ask the voice assistance to find the shortest route possible or a second best route than connect all the delivery points. During the drive, the voice assistance will update Kai on the road conditions such as ‘we are entering a construction site’, ‘there is a traffic 3 min ahead’, etc. </p>
              <br></br>
              <h4>Milestone 03 - End</h4>
              <p>After Kai finishes all of her deliveries, the CUI will ask her if she is ready to take a few more deliveries, if so, how many extras is she comfortable taking. CUI will also be checking in on the fuel condition of Kai’s SUV, If Kai is low on gas, the CUI will direct her to the nearest gas station. If Kai would like to go home, CUI will be providing two options: One is to navigate Kai straight to her house, or she could potentially complete some deliveries along the way home. Finally, when Kai arrives home, the voice assistant will give a brief summary on what Kai did for the day (Numbers of deliveries, time she drove and miles the drove etc.).</p>
              <br></br>
            </div>
          </div>
        </div>


        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Journey Map.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <img id="journey-img" src={Journey} alt="User Journey Map" />

              <a id="journey" href="https://drive.google.com/file/d/1x4YyoN17-8IBWHEDpYoIBJaw8sF8g9ZF/view?usp=sharing" target='blank'>Link to the Journey Map</a>

            </div>
          </div>

        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Implementation.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <h4>Milestone 01</h4>
              <img id="journey-img" src={M011} alt="Milestone 01 voiceflow implementation" />


            </div>
          </div>

        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Voice Demo.</h2>
          </div>


          <div className="body-right">
            <div className="para">
              <h3>Milestone 1</h3>
              <br></br>
              <audio controls>
                <source src={Milestone1} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <br></br>
              <br></br>
              <br></br>

              <h3>Milestone 2</h3>
              <br></br>
              <audio controls>
                <source src={Milestone2} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <br></br>
              <br></br>
              <br></br>

              <h3>Milestone 3</h3>
              <br></br>
              <audio controls>
                <source src={Milestone3} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
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
              <p>In this experience of designing and implementing a voice-controlled user interface, I came to understand the unique nature of conversational user interfaces (CUI) compared to the visual interfaces I had previously created. Creating a CUI needs careful consideration of potential user interactions and the integration of error handling features for incorrect commands. After reading the article "Customer Journey Mapping," I recognized the journey map's significance in analyzing a specific product, pinpointing pain points, and facilitating improvements. By employing a journey map and defining a persona, I successfully developed a CUI script tailored to address users' needs for certain scenarios.
              </p>
              <br></br>
              <p>Additionally, conducting user testing provided me valuable information for improving the CUI. For example, based on user input, incorporating multiple utterances and alternative requests was essential to meet users' diverse needs. This led to the implementation of an "information" path to accommodate users seeking further information on topics (like gas station refill) with the CUI.</p>
              <br></br>
              <p>This unique experience has equipped me with valuable skills that I can apply to future voice interface projects, ultimately broadening my expertise in the realm of CUI design and user experience. </p>

            </div>
            <br></br><br></br>
          </div>

        </div>

      </div>


    </div>
  )



}
