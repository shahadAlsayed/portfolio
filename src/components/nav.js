import React from 'react'
import Box from '@mui/material/Box';
import '../Style/nav.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import $ from 'jquery';

function nav (){

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
      document.getElementById('links').innerHTML.color="#D9186A";

    }
    return(
      <Box sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex' } }}>
        <Button
          id='links'
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
