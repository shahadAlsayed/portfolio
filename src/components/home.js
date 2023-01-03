import React from 'react'
import Nav from './Nav.tsx';
import Hero from './Hero';
import Experience from './experience';
import AboutMe from './aboutMe';
import Projects from './projects';
import Contact from './contact';
import TagSkills from './tagSkills';
import Footer from './footer';

function home(){
  return (
    <>
    <Nav/>
    <Hero/>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <TagSkills></TagSkills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default home;
