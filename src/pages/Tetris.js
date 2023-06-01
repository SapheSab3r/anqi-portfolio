import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import './AllProjects.scss'
import Code from '../images/Tetris/code.png';
import Example from '../images/Tetris/example.png';
import Rotation from '../images/Tetris/rotation.gif';
import Demo from '../images/Tetris/demo.gif';


export default function Tetris() {
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
        <h1 className="project-name">Tetris</h1>
        <div className="summary">
          <div className="col">
            <h3>Duration</h3>
            <p>2 Weeks</p>
            <p>(Individual Project)</p>
          </div>
          <div className="col">
            <h3>Role</h3>
            <p>Backend Developer</p>
            <p>Frontend Developer</p>
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
            <h2 className="left-heading">Design Overview.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <p>The Tetris game I developed employs Python in tandem with the CMU library package. The fundamental objective of Tetris is to strategically place the falling pieces to complete horizontal rows, which then disappear from the game board, awarding points to the player. This design encompasses two primary elements: the game board and the falling pieces. </p>
              <br></br>
              <p>The game board is a grid of cells, initially all colored blue to denote that they are empty. Each falling piece is distinctively colored for differentiation and is overwritten on this board. The falling pieces become part of the board when they can no longer fall (either by reaching the board's bottom or colliding with a previously placed piece), and it becomes an integrated part of the board. </p>
              <br></br>
              <p>The falling pieces are represented as two-dimensional lists of Boolean values, each indicating whether a given cell forms part of the tetromino. As an example, the 'S' piece might be defined as follows:
              </p>
              <img id="ex-img" src={Example} alt="Example of a 2-d array list representation of 'S'" />
              <p>This depiction signifies that this specific piece spans two rows and three columns. </p>
              <br></br>
              <p>Alongside the game board and the falling piece elements, interactive keyboard functionalities also form an essential part of the design. These include restarting the game at any moment by pressing 'r', pausing gameplay with 'p', and using arrow keys for the directional maneuvering and rotational adjustment of falling pieces.</p>

              <br></br>
              <h3>Keyboard features</h3>
              <h4>'Space'</h4>
              <p>
                Hard Drop - hitting the space bar immediately drops a piece as far as it can go and places it on the board
              </p>
              <h4>'Left/Right' Arrow Key</h4>
              <p>
                Moving the direction of the falling piece to the left or right
              </p>
              <h4>'Down' Arrow Key</h4>
              <p>
                Moving the falling piece one step down
              </p>
              <h4>'p' Key</h4>
              <p>
                Pausing or unpausing the game
              </p>
              <h4>'r' Key</h4>
              <p>
                Restarting the game
              </p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Highlight.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <p>A significant challenge I encountered during the development of this game was the implementation of an algorithm to manage the rotation of each falling piece. My approach to resolving this was to assign a number to each grid cell and carefully observe the behavior of the piece rotation in existing versions of the Tetris game. I noticed that each piece rotates 90 degrees counterclockwise each time. To reflect this transformation programmatically, two aspects of the falling piece needed to be updated: its dimensions and its structure.
              </p>
              <br></br>
              <p>The dimensions of the piece involve the number of rows and columns it spans. A rotation swaps these quantities - for instance, an original piece covering a 2x3 area (2 rows by 3 columns) will transform into a piece spanning a 3x2 area (3 rows by 2 columns) after a single rotation, as illustrated below.
              </p>

              <div className="gif">
                <img src={Rotation} alt="Gif example of using identifiers on the grid of the piece to find the algorithm" />
              </div>

              <p>
                The second requirement, updating the structure of the peace, involves identifying the old row and column of each cell and determining their new positions post-rotation. By assigning a unique identifier to each cell and observing the positional shift of these identifiers after rotation, I found a calculation method for the new row and column. This finding allowed me to successfully integrate the rotation feature into the game.
              </p>

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
              <p>Presented below are select code excerpts from this project.</p>
              <br></br>
              <img className="code-img" src={Code} alt="Code Snippets" />
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="body-container">
          <div className="body-left">
            <h2 className="left-heading">Demo.</h2>
          </div>

          <div className="body-right">
            <div className="para">
              <div className="demo-gif">
                <img src={Demo} alt="Demo gif of the tetris game" />
              </div>

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
