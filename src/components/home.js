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
import TagSkills from './tagSkills';
function home(){
  return (
    <>
    <Nav/>
    <Hero/>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <TagSkills></TagSkills>
    {/* <SoftSkills></SoftSkills> */}
    {/* <TechnicalSkills></TechnicalSkills> */}
    <Projects></Projects>
    <Contact></Contact>
    </>
  )
}

export default home;
