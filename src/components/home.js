import React from 'react'
import Nav from './nav';
import Hero from './hero';
import Experience from './experience';
import Skils from './skils.tsx'
function home(){
  return (
    <>
    <Nav/>
    <Hero/>
    <Experience></Experience>
    <Skils></Skils> 
    </>
  )
}

export default home;
