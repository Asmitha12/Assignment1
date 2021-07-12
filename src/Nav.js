import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
            
            <h1>Asmitha M</h1>
            <h2>Assignment 1</h2>
            <ul align='left'>
               <Link to ='/home'>
                <li>
                    Home
                </li>
                </Link>
                <Link to ='/about'>
                <li>
                    About
                </li>
                </Link>
                <Link to ='/contact'>
                <li>
                    Contact
                </li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;