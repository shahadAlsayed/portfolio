import React from 'react'
import Nav from './nav';
import Hero from './Hero';
import Experience from './experience';
import Skils from './skils.tsx'
import SoftSkills from './softSkills';
import TechnicalSkills from './technicalSkills';
import AboutMe from './aboutMe';
import Projects from './projects';
import Contact from './contact';
function home(){
  return (
    <>
    <Nav/>
    <Hero/>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <SoftSkills></SoftSkills>
    <TechnicalSkills></TechnicalSkills>
    <Projects></Projects>
    <Contact></Contact>
    </>
  )
}

export default home;
