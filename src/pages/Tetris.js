import React, {useEffect} from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import './AllProjects.scss'
import Scroll from './Scroll'
import TetrisCover from '../images/TetrisCover.png'


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
      <div className="main-container" style={{ 
      backgroundImage: `url(${TetrisCover})`,
      height: '95vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    }}>
        <div className="main-cover">
          <Scroll/>
        </div>
        <h2 className="project-name">Tetris Clone</h2>
        <div className="body-container">
          <div className="body-intro">
            <div className="body-left">
              <h3 className="left-heading">Overview</h3>
              This is the game project for the course CMU 15-112: Fundamentals of Programming. The goal is to make a simple Tetris game using Python with the CMU 112 graphics package.
            </div>

            <div className="body-right">
            <h3 className="left-heading">Role</h3>
            <diiv className="block-names">
              <div className="block">Full-Stack Development</div>

            </diiv>

            </div>
          </div>
        </div>
      </div>
    </div>
  )



}
