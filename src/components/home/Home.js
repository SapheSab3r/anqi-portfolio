import React from 'react';
import './Home.scss';
import { HashLink } from 'react-router-hash-link';

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

                <HashLink className="arrow" to='#project' smooth>
                    <div className="line" ></div>
                </HashLink>

            </div>

        </section>
    );
}