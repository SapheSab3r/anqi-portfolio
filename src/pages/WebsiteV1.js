import React, {useEffect} from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import './AllProjects.scss'
import Scroll from './Scroll'
import Web1Cover from '../images/Web1Cover.png'


export default function WebsiteV1() {
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
        <h1 className="project-name">Personal Website Version 1</h1>
        <div className="body-container">
          <div className="body-intro">
            
            <div className="body-left">
              <div className="body-intro">


                <div className="duration">
                  <h3 className="dur">
                    <span className="dur-bold">
                    DURATION:
                    </span> Mar.2022 - May 2022</h3>
                </div>

                <div className="duration">
                  <h3 className="dur">
                    <span className="dur-bold">
                    LINK: 
                    </span>
                    <a href="https://saphesab3r.github.io/AnqiChenWebsite/"> Website Link</a>
                  </h3>
                </div>

              </div>
              <h2 className="left-heading">Overview</h2>
             
            </div>

            <div className="body-right">

              <h3 >Methods</h3>
              <div className="block-names">
                <div className="block">Wireframing</div>

              </div>

              <div className="body-right">
                <h3 className="title">Tools</h3>
                <div className="block-names">
                  <div className="block">VS Code</div>
                  <div className="block">Adobe Photoshop</div>
                </div>

            </div>

            <div className="body-right">
                <h3 className="title">Roles</h3>
                <div className="block-names">
                <div className="block">Front-end Development</div>
                <div className="block">Web Designer</div>
                </div>

              </div>
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
