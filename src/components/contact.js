import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../Style/contact.css'
import Pattren from '../Assets/pattren.png';
import Linkedin from '../Assets/linkedin.svg'
function contact(){
  return (    

    <section id="contactSection">
    <Typography className='title' variant='h3' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'4rem' , paddingBottom:'2rem',marginTop:'4em'}}>Contact</Typography>
    <Box sx={{width:'60%',display:'flex',justifyContent:'center',marginLeft:'auto',marginRight:'auto',marginBottom:'4em'}}>
      <Box sx={{width:'50%',bgcolor:"#F2E2E3"}}>
      <img className='pattren' src={Pattren}></img>
      </Box>
      <Box sx={{width:'50%',justifyContent:'center',display:'flex',flexDirection:'column',border:'20px solid #F2E2E3'}}>
        <Box sx={{display:'flex', flexDirection:'row', paddingLeft:'2em',alignItems:'center'}}>
        <a className='linkedinIcon icon' href='https://mui.com/material-ui/icons/#material-svg-icons'>
        <img className='linkedinIcon icon' ></img>
        </a>
          <Box  sx={{display:'flex', flexDirection:'column',paddingTop:'2rem' , paddingBottom:'2rem',paddingLeft:'1em'}}>
          <Typography variant='h8' sx={{color:'#3F3F3F' , fontWeight:'bold' , display:'flex' }}>Linkedin</Typography>
          <Typography variant='h8' sx={{color:'#3F3F3F' ,  display:'flex',paddingTop:'5px'}}>Shahad Alsayed</Typography>
          </Box>
        </Box>  
        <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', paddingLeft:'2em'}}>
          <a className='phoneIcon icon'href='tel:+966549554621'>
          <img ></img>
          </a>
          <Box sx={{display:'flex', flexDirection:'column',paddingTop:'2rem' , paddingBottom:'2rem',paddingLeft:'1em'}}>
          <Typography variant='h8' sx={{color:'#3F3F3F' , fontWeight:'bold' , display:'flex' }}>Phone</Typography>
          <Typography variant='h8' sx={{color:'#3F3F3F' ,  display:'flex',paddingTop:'5px'}}>+966 549554621</Typography>
          </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', paddingLeft:'2em'}}>
          <a className='emailIcon icon' href='mailto:ShahadAlsayed44@gmail.com'>
          <img  ></img>
          </a>
          <Box sx={{display:'flex', flexDirection:'column',paddingTop:'2rem' , paddingBottom:'2rem',paddingLeft:'1em'}}>
          <Typography variant='h8' sx={{color:'#3F3F3F' , fontWeight:'bold' , display:'flex' }}>Email</Typography>
          <Typography variant='h8' sx={{color:'#3F3F3F' ,  display:'flex',paddingTop:'5px'}}>ShahadAlsayed44@gmail.com</Typography>
          </Box>
        </Box>
      </Box>

    </Box>
    </section>
    
  )
}

export default contact;