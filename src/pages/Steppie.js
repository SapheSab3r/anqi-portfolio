import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Svideo from '../video/SteppieFitnessAppDemo.mp4';
import Step from '../images/Steppie/steps.png';
import Mascot from '../images/Steppie/mascot.png';
import Comic from '../images/Steppie/comic.png';
import Intention from '../images/Steppie/intention.png';
import Wireframe from '../images/Steppie/WF.png';
import Post from '../images/Steppie/postcard.png';
import Prototype from '../images/Steppie/prototype.png';



export default function Steppie() {
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
        <h1 className="project-name">Steppie Mobile App UI & Character Design</h1>
        <div className="summary">
          <div className="col">
            <h3>Duration</h3>
            <p>3 Weeks</p>
            <p>(Individual Project)</p>
          </div>
          <div className="col">
            <h3>Role</h3>
            <p>UI Designer</p>
            <p>Researcher</p>
            <p>Interviewer</p>
          </div>
          <div className="col">
            <h3>Skill</h3>
            <p>Hi-fi Prototyping</p>
            <p>On-site Interview</p>
            <p>Research</p>
          </div>
          <div className="col">
            <h3>Tool</h3>
            <p>Figma</p>
            <p>Adobe Photoshop</p>
            <p>Adobe Illustrator</p>
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
            <h2 className="left-heading">Research.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <p>"Steps" are a prominent feature of Pittsburgh's geography and culture. Pittsburgh contains many steep hillsides and numerous sets of public staircases that connect different neighborhoods.</p>
              <br></br>
              <p>There are over 700 steps built in the late 19th and early 20 to provide easy access to various amenities like parks, shops, and neighborhoods. Then, the "Steps" became an integral part of Pittsburgh's culture and identity.</p>
              <br></br>
              <img src={Step} alt="An image of the Pittsburgh Step" />
              <h3>The Problem</h3>
              <br></br>
              <p>However, with the current technological innovation, new roads constructed, cars and buses, and other vehicles becoming more accessible to people, steps are gradually abandoned. This could be a representation of a loss of connection between neighborhoods. In other words, advanced technologies separate people.

                By conducting an on-site interview of local people's awareness of the steps in Pittsburgh and its history and cultural representation, I found that many people were not familiar with the steps.
              </p>

            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Site Interview.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <h4>Interviewee 1 - Local Shop keeper</h4>
              <p>She said that she had never heard of the steps before. She only knew there were abandoned steps somewhere but was not sure of their importance. </p>
              <br></br>
              <h4>Interviewee 2 - Teacher</h4>
              <p>She mentioned that back then people used steps a lot to visit others. It was very lively seeing people walking up and down the steps, but most were people interacting with others from different neighborhoods.</p>
              <br></br>
              <h4>Interviewee 3 - Uber driver</h4>
              <p>He said that he knew there was one time some organization painted the steps on the Southside for the cultural showcase. But that was the only thing he knew about the steps in Pittsburgh. </p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Solution.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <h4>Target issue</h4>
              <p>Losing connection within neighborhoods.</p>
              <br></br>
              <h4>Solution</h4>
              <p>A community app to bring Pittsburgh neighborhood people together. This app could combine the fitness app and social media app -- target both groups of people (jogger and people love to post on social media).</p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Mascot Design.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <h3>Steppie</h3>
              <p>I began by developing the mascot design for this app, believing that a mascot could establish a personable and friendly identity for the platform. A well-designed mascot has the potential to foster user engagement and affinity, appealing to a broad audience. Presented below are several preliminary sketches and ideas for the mascot's appearance. After thoughtful consideration, I opted for the first design, which I then refined to cultivate a charming and adorable aesthetic, aiming to captivate and resonate with the general public.</p>
              <img src={Mascot} alt="Mascot design drafts and selected version" />
              <br></br>
              <h3>Comic</h3>
              <p>I also produced a brief comic to introduce Steppie, our Mascot, to the public. This narrative, steeped in ethos, was designed to foster a meaningful connection with our audience, enhancing their engagement with the app and the mascot.</p>
              <img src={Comic} alt="Steppie Comic" />
              <br></br>
              <h3>Overview</h3>
              <img src={Intention} alt="Steppie Comic" />
              <br></br>
              <h3>Posters/Cards</h3>
              <img src={Post} alt="Steppie Postcard sample" />
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Wireframes.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <h3>Lo-fi Wireframes</h3>
              <img src={Wireframe} alt="Steppie App lo-fi Wireframe design" />
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Hi-Fi Prototype.</h2>
          </div>

          <div className="body-right">
            <div className="para">
            <img id="prototype" src={Prototype} alt="Steppie App hi-fi prototype design" />
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
              <video src={Svideo} width='520px' controls='true' className='video'></video>
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
              <h3>What I learned</h3>
              <p>From this project and as a beginner, I definitely learned a lot and had a basic understanding of the UI/UX project process. Overall, I noticed that there were many steps I misses and many steps that should improve, but it was a good and fun hands-on experience.</p>
              <p>In the Interview and research process, I learned how to focus and find a potential problem of a topic and develop my interview questions around that.</p>
              <p>For Wireframe and Internal Pages, I was able to explore the functions Figma provides and utilize the interaction feature to connect each page and present my ideas. </p>
              <br></br>
              <h3>What to improve</h3>
              <ul>
                <li>Conducting User Testing on the wireframes and prototypes before implementing them to hi-fi.</li>
                <li>Lost focus on the target by focusing too much on the hi-fi details -- should list target goals of the design and features want to add.</li>
                <li>Should make Storyboards or Personas to identify specific users -- current users are too ambiguous.</li>
                <li>Slow down on the wireframes, lo-fi prototypes designs.</li>
              </ul>

              <br></br>
              <br></br>
            </div>
          </div>

        </div>

      </div>

    </div>
  )



}
