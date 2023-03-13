import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './AboutPage.scss'
import me1 from '../images/me1.jpg'
import me2 from '../images/me2.jpg'
import me3 from '../images/me3.jpg'

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      <div className="aboutPage-container">
        <div className="aboutInfo-container">
          <h2 className="more-about">
            A Bit More About Me
          </h2>

          <div className="body">
            <div className="left">
              <div className="me">
                <img src={me1} alt="Photo of Anqi" className='me1-pic'/>
                <img src={me3} alt="Photo of Anqi inside Masjid Wilayah Persekutuan" className='me3-pic'/>
              </div>
            <p className='p1'>
              I would call myself a "third-culture kid". I was born in China, spending my kindergarden and elementary years in two different cities, Huaibei and Suzhou. Then, I moved with my parents to Kuala Lumpur, Malaysia for my middle school and high school years. 
            </p>

            </div>

            <div className="right">
            <p className="p2">
              Sports or games that involve physical movements and team collaboration are my favorite go-to activities during my free time. I have almost tried all of the sports that were listed in my middle school and high school, like Badminton, basketball, alternate frisbee, touch, and other sports. I won't claim that I am great in sports in general, but I would say it is the best way for me to be able to relax.
              In college, I fell in love with a new physical activity that can help me relax: weight training.
            </p>

            <div className="me2">
              <img src={me2} alt="Photo of Me posing after weight training" className='me2-pic'/>
            </div>

            </div>

            <p className="p3">
            Of course, in addition to weight training and sports, I also do other fun things during my free time, such as drawing, writing journal and reading fictional books. 
            </p>


           
          </div>


        </div>

      </div>

    </div>
  )
}
