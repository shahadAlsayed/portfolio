import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Fade from '@mui/material/Fade';
import Logo from '../Assets/logo-w.svg'
import '../Style/hero.css'
import Transitions from './transitions'

function hero(){
  return (
    <Transitions>

    
    <Box>
        <Container disableGutters={true} sx={{height:'60vh',width:'100vw', bgcolor:"#fff" , display:'flex' ,flexDirection:'row' , alignItems:'center' }} maxWidth="false" >
      {/* <Container  disableGutters={true} sx={{height:'70%'}} maxWidth="m" > */}

        <Box sx={{display:'flex',flexDirection:'column' ,  height: '60%', width: '45%', alignItems:'center', justifyContent:'center' }}>
            <Typography variant="h1" sx={{color:'#D9186A' , letterSpacing:'0.1em'}}>Protfolio</Typography>
            <Typography variant="h3" sx={{color:'#40403F' , paddingTop:'1em', letterSpacing:'0.1em'}}>Shahad Alsayed</Typography>
        </Box>
        <Box sx={{  height: '100%', width: '55%'  }}>
        <img className='logo' src={Logo}/>
        </Box>

     </Container>
    </Box>
    </Transitions>
  )
}

export default hero;