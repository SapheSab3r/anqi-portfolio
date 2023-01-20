import React from 'react';
import './Home.scss';

export default function Home() {
    return ( 
        <section className='home' id='home'>
            <div className='home-container' data-bg-text="HELLO">

                <div className='name-box'>
                    <div className='name'>I'm <span>Anqi</span> Chen.</div>
                </div>

                <div className='intro'>
                    <div className='intro-text'>
                        I study Information Systems and Human-Computer Interaction @ Carnegie Mellon University.<br></br>
                        Actively seeking opportunity to explore <span className='span-bold'>Development & Design </span> for <span className='span-bold'>Inclusion & Improvement</span>. 
                    </div>
                </div>

                <div className="arrow" href='#projects'>
                    <div className="line" ></div>
                </div>

            </div>

        </section>
    );
}