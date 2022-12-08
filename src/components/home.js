import React from 'react'
import Nav from './nav';
import Hero from './Hero';
import Experience from './experience';
import AboutMe from './aboutMe';
import Projects from './projects';
import Contact from './contact';
import TagSkills from './tagSkills';
import CV from './cv'
function home(){
  return (
    <>
    <Nav/>
    <Hero/>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <TagSkills></TagSkills>
    <Projects></Projects>
    {/* <CV></CV> */}
    <Contact></Contact>
    </>
  )
}

export default home;
