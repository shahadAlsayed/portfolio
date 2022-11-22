import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import '../Style/experience.css'
import Box from '@mui/material/Box';
import Transitions from './transitions'

function experience(){
  return (
    <>
    <section id="experienceSection">

   
    <Box sx={{paddingTop:'8em'}}>
    <Typography className='title' variant='h3' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'4rem' , paddingBottom:'2rem'}}>Experience</Typography>

    <Timeline position="alternate">

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="#3F3F3F"
        >
          Jan 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <PersonIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{color:'#3F3F3F' , fontWeight:'bold'}}>
          Developer
          </Typography>
          <Typography sx={{color:'#3F3F3F'}}>Solutions by stc</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="#3F3F3F"
        >
          May 2021 - December 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{color:'#3F3F3F' , fontWeight:'bold'}}>
          Trainee
          </Typography>
          <Typography sx={{color:'#3F3F3F'}}>Solutions by stc</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="#3F3F3F"
        >
          Septmber 2017 - Augest 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{color:'#3F3F3F' , fontWeight:'bold'}}>
          Bachelor Information Technology
          </Typography>
          <Typography sx={{color:'#3F3F3F'}}>King Saud University</Typography>
        </TimelineContent>
      </TimelineItem>      
    </Timeline> 
    </Box>
    </section>
    </>
  );
}

export default experience