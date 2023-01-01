import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Logo from '../Assets/logo-w.svg'
import '../Style/hero.css'


function Hero(){
  const [checked] = React.useState(true);
  return (    
    <section id="homeSection">
    <Box>
        <Container disableGutters={true} sx={{height:'60vh',width:'95vw',  display:'flex' ,flexDirection:'row' , alignItems:'center',marginBottom:'4rem'}} maxWidth="false" >

        <Box sx={{display:'flex',flexDirection:'column' ,  height: '60%', width: '45vw', alignItems:'flex-start', justifyContent:'center', paddingLeft:'5em' ,paddingTop:'12em'}}>

        <Fade in={checked} appear='true' timeout={6000} >
            <Typography variant="h1" sx={{color:'#D9186A' , letterSpacing:'0.1em'}}>Protfolio</Typography>
        </Fade>

        <Fade in={checked} appear='true' timeout={11000} >
            <Typography variant="h3" sx={{color:'#40403F' , paddingTop:'1em', letterSpacing:'0.1em'}}>Shahad Alsayed</Typography>
            </Fade>

        </Box>

        <Box sx={{  height: '100%', width: '55vw'  }}>
        <Fade in={checked} appear='true' timeout={3000}><img className='logo' src={Logo}/></Fade>
        </Box>

     </Container>
    </Box>
    </section>
    
  )
}

export default Hero;