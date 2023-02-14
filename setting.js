import React from 'react'
import { Button } from '@mui/material';
import { Box} from '@mui/material';
import {Grid} from '@mui/material';
import {Typography} from '@mui/material';
import { useState } from 'react';
import Dashboard_au from './Dashboard_author'
import {Paper} from '@mui/material';
import {useMediaQuery} from '@mui/material';
import {  } from '@mui/base';
function Setting  ()  {
    const mobile=useMediaQuery('(max-width:600px)')
  const[email,setEmail]=useState('');
  cost[otp,setOtp]=useState('');
    return (
 
          <> 
          <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'812px':'1300px'}}>
            <Paper component='form' width="1152px" height='950px' sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'700px':'1148px',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',
background: '#FFFFFF',
				borderRadius: '12px'
			}}>
            <Grid container md={7} xs={12}>
                
                <Grid item md={11} xs={10} sx={{margin:'auto'}}>
                <Typography sx={{marginLeft:'150px',fontSize:'18px',height:"48px",lineHeight:'48px',textAlign:'center',fontWeight:'600',marginTop:'28px'}}>
                Account Settings
                </Typography>
                <Grid item md={12} xs={10}sx={{margin:'auto'}}>
                   <Typography variant='h4' sx={{ marginLeft:'80px',marginTop:'15px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>EMAIL ADDRESS</Typography>
                   </Grid>
                   </Grid>
                
                <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}></label>
                    <input
                   type="email"
                   placeholder="Enter your email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  

                 />
                                    <Grid item><Button type="submit" fullWidth variant="contained" sx={{marginTop:'30px',borderRadius:'8px',width:'168px',background: '#3A81F3',TextTransform:'none',marginLeft:'82px',height:'px',width:'208px'}}>Change</Button></Grid>
                   <Grid item md={12} xs={10}>
                   <Typography variant='h4' sx={{marginLeft:'-130px',marginTop:'25px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Password</Typography>
                   <input
                     type="text"
                     placeholder="Enter the OTP"
                     value={otp}
                     onChange={(e) => setOtp(e.target.value)}/>
                     </Grid>
                 </Grid>
                
            </Paper>
          </Box>
          <Dashboard_au/>
           

</> 
  
  )
}

export default Setting;
