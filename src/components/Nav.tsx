import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import '../Style/nav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import $ from 'jquery'
import {useEffect} from 'react';

const pages = ['Home', 'About', 'Experience','Skills','Projects','Contact'];

  export default function Nav(){

  // ******** ADD BACKGROUND COLOR TO THE NAV **********
      useEffect(() =>{
        window.addEventListener('scroll', navBackground, { passive: true });

      },[])

function navBackground(){
  if(window.scrollY==0){
    $('.nav').css("background-color", 'rgba(255,255,255,0)')              
   }else{
    $('.nav').css("background-color", '#fff' , $(window).scrollTop() / 700)              
   }
}

  // ******** NAV MENU **********
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar className='nav' sx={{background:'rgba(255,255,255,0)',boxShadow:'none',top:'0',color:'#D9186A'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <AnchorLink offset={50} href={`#${page.toLowerCase()}Section`}>
                  <Typography  textAlign="center">{page}</Typography>
                  </AnchorLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <AnchorLink  offset={50}
              href={`#${page.toLowerCase()}Section`}
              >
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              </AnchorLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
// export default Nav;
