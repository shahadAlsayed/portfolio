import React from 'react'
import '../Style/footer.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReactIcon from '../Assets/react-icon.png'

function footer(){
return(

    <Box sx={{display:'flex',justifyContent:'center',width:'100%'}}>

    
    <Box sx={{width:'100%',height:'5%',display:'flex',justifyContent:'center',position:'absolute',alignItems:'center',bgcolor:'#3F3F3F',color:'#fff'}}>
        <Box sx={{width:'50%',display:'flex',justifyContent:'flex-start',alignItems:'center',marginLeft:'5%'}}>
        <Typography className='text' sx={{fontSize:'0.9em'}}>©2022 By Shahad Alsayed</Typography>
        </Box>
        <Box sx={{width:'50%',display:'flex',justifyContent:'flex-end',marginRight:'5%',alignItems:'center'}}>
        <img className='reactIcon' src={ReactIcon}></img>
        <Typography className='text' sx={{fontSize:'0.9em'}}>Using React</Typography>
        </Box>
    </Box>  
    </Box>
)
}

export default footer