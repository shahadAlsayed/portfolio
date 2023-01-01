import React from 'react'
import Box from '@mui/material/Box';
import '../Style/nav.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import $ from 'jquery';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
function nav (){


//   $(document).ready(function(){
//     $(window).scroll(function(){
//         $('.nav').css("background-color", '#fff' , $(window).scrollTop() / 700)        
//     })
// })


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
          
          <Box className='nnav' sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex' } }} >
            {pages.map(page => renderNavLink(page))}
          </Box>
          {/* <Box>
          <Button className="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <Box className="navigation-menu">
         {pages.map(page => renderNavLink(page))}
      </Box>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>  
  )
        }



export default nav;
