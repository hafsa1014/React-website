import React from 'react';
import web from "../src/images/particulier.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () => {
    return (<>
        <Common 
        name='Welcome To About Page '
         imgsrc={web} 
         visit='/contact' 
         btname="Contact Now" 
         />
    </>
    );
};

export default About;