import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import './AllProjects.scss'


export default function Website() {
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
        <h1 className="project-name">Portfolio Website</h1>
        <div className="summary">
          <div className="col">
            <h3>Duration</h3>
            <p>Unlimited</p>
          </div>
          <div className="col">
            <h3>Role</h3>
            <p>Frontend Developer</p>
            <p>UI Designer</p>
          </div>
          <div className="col">
            <h3>Skill</h3>
            <p>ReactJS</p>
            <p>SCSS</p>
          </div>
          <div className="col">
            <h3>Tool</h3>
            <p>Figma</p>
            <p>VSCode</p>
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
              <p>Embarking on my first coding project, I found the practical application for my Python knowledge in the creation of a game. I also noticed the importance of initial planning, including the setup of the file structure and defining character interactions.</p>
              <br></br>
              <p>A significant challenge encountered during the implementation phase was the trajectory algorithm for the Kernel-pulp and the Cattail projectiles. This proved complex due to the need to continuously monitor their collision status with the oncoming zombies. Initially, I used the projectile motion formula, but found it inadequate during integration testing. The crux of the problem lay in the delay between the bullet launch and its point of impact on the moving zombie. To overcome this, I found an alternative solution that instead aimed the projectile towards a point several units ahead of the incoming zombie. This adjustment allowed the zombie to advance into the path of the projectile, thus ensuring successful hits. The implementation of this corrective measure markedly improved the effectiveness of the Cattail and Kernel-pult attacks.</p>
              <br></br>
              <p>Reflecting on the final product, I am pleased with my first game development. Nevertheless, I recognize the potential improvements for this game. For example, the incorporation of animations for all characters could significantly enrich the interactivity and user experience. This might require storing a series of images for each character in an array and developing an animation function to cycle through them. The timer function would then continually run these animation functions, thereby introducing dynamic elements into the game.</p>
              <br></br>
              <p>This project served as a valuable learning journey, providing insights into the practical aspects of coding. It has galvanized my interest in programming and I look forward to building upon these skills in future projects.</p>

              <br></br>
              <br></br>
            </div>
          </div>

        </div>

      </div>

    </div>
  )



}
