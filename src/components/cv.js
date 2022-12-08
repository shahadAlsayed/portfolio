import React from 'react'
import '../Style/cv.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import QR from '../Assets/qr.png'

function cv(){
  return (
    <section id="cvSection">
    {/* <Typography className='title' variant='h3' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'4rem' , paddingBottom:'2rem',marginTop:'4em'}}>CV</Typography> */}
    <Box sx={{flexDirection:'row',width:'100%',height:'50%',display:'flex',justifyContent:'center',marginLeft:'auto',marginRight:'auto',marginBottom:'4em',alignItems:'center',}}>
        <Box className='wrap' sx={{width:'40%',alignItems:'center',display:'flex'}}>
        <Button className="download">Download the CV</Button>
        </Box>
        <Box sx={{width:'40%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Typography variant='h6' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'4rem' , paddingBottom:'2rem',marginTop:'4em'}}> Scan the QR</Typography>
            <img className='qr' src={QR}></img>
        </Box>
    </Box>

    </section>
  )
}

export default cv