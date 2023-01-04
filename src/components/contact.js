import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../Style/contact.css'
import QR from '../Assets/qr.png'

function contact(){
  return (    

    <section id="contactSection">
    <Typography className='title' variant='h3' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'4rem' , paddingBottom:'2rem',marginTop:'4em'}}>Contact</Typography>
    <Box sx={{width:'60%',display:'flex',justifyContent:'center',marginLeft:'auto',marginRight:'auto',marginBottom:'8em'}}>

      <Box  className='pattren' sx={{bgcolor:"#F2E2E3",borderRadius:'5px'}}>
      <Box className='test' sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'80% '}}>
            <Typography className='scan'  variant='h6' sx={{color:'#3F3F3F' , fontWeight:'bold' }}> Scan the QR</Typography>
            <img className='qr' src={QR}></img>
        </Box>
      </Box>
      
      <Box className='medai' sx={{width:'50%',justifyContent:'center',display:'flex',flexDirection:'column'}}>

        {/* //linkedin */}
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:'50%'}}>
        {/* <a className='linkedinIcon icon' href='https://www.linkedin.com/in/shahad-alsayed-662792203'> */}
        <img className='linkedinIcon icon' ></img>
        {/* </a> */}
          <Box  sx={{display:'flex', flexDirection:'column',paddingTop:'2rem' , paddingBottom:'2rem'}}>
          {/* <Typography variant='h8' sx={{color:'#3F3F3F' , fontWeight:'bold' , display:'flex' }}>Linkedin</Typography>

          <Typography variant='h8' sx={{color:'#3F3F3F' ,  display:'flex',paddingTop:'5px'}}>  Shahad Alsayed  </Typography> */}
          </Box>
        </Box>  

        {/* phone */}
        <Box sx={{display:'flex', flexDirection:'column',alignItems:'center', width:'50%'}}>
          <a className='phoneIcon icon'href='tel:+966549554621'>
          <img ></img>
          </a>
          <Box sx={{display:'flex', flexDirection:'column',paddingTop:'2rem' , paddingBottom:'2rem'}}>
          {/* <Typography variant='h8' sx={{color:'#3F3F3F' , fontWeight:'bold' , display:'flex' }}>Phone</Typography>
          <Typography variant='h8' sx={{color:'#3F3F3F' ,  display:'flex',paddingTop:'5px'}}> +966 549554621</Typography> */}
          </Box>
        </Box>


        {/* email */}
        <Box sx={{display:'flex', flexDirection:'column',alignItems:'center', width:'50%' }}>
          <a className='emailIcon icon' href='mailto:ShahadAlsayed44@gmail.com'>
          <img ></img>
          </a>

          <Box className='emailClass' sx={{display:'flex', flexDirection:'column',paddingTop:'2rem' , paddingBottom:'2rem'}}>
          {/* <Typography variant='h8' sx={{color:'#3F3F3F' , fontWeight:'bold' , display:'flex' }}>Email</Typography>
          <Typography variant='h8' sx={{color:'#3F3F3F' ,  display:'flex',paddingTop:'5px'}}>ShahadAlsayed44@gmail.com</Typography> */}
          </Box>

        </Box>
        
      </Box>
    </Box>

    </section>
    
  )
}

export default contact;