import './Navbar.scss';
import React from 'react';
import {Link} from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/' className='head'>
            <h1>An<span>Qi.</span></h1>
            </Link>
            
            <div className='links'>
                <HashLink to='#project' smooth className='nav project'>Project</HashLink>
                <HashLink to='#about' smooth className='nav'>About</HashLink>
                <Link className='nav' href='/'>Resume</Link>
            </div>
        </div>
    );
}
 
