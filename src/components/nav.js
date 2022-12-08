import React from 'react'
import Box from '@mui/material/Box';
import '../Style/nav.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../Assets/logo.png'
import { height } from '@mui/system';
import Transitions from './transitions'
import { Link, animateScroll as scroll } from "react-scroll";
import Experience from './experience';
import $ from 'jquery';

function nav (){
// var topPostion=$(window).position()
  $(document).ready(function(){
    $(window).scroll(function(){
        $('.nav').css("background-color", '#fff' , $(window).scrollTop() / 700)
    })
})

  const pages = ['Home', 'About', 'Experience','Skills','Projects','Contact'];

  const renderNavLink = (page) => {
    
    const scrollToId =`${page.toLowerCase()}Section`;
  
    const handelClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({behavior:'smooth'})

    }
    return(
      <Box sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex' } }}>
        <Button
          key={page}
          onClick={handelClickNav}
          sx={{ my: 2, color: '#3F3F3F', display: 'block' }}
        >
         {page}
        </Button>

    
    </Box>
    )


  }

  return (

    <AppBar  className='nav'  sx={{background:'none', boxShadow:'none', position:'fixed',top:'0'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => renderNavLink(page))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    
   
  )
        }



export default nav;