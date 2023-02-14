import React from 'react'
import { Paper,Box, Typography, Button } from '@mui/material';
import Dashboard_menu from './Dashboard_menu';
import useMediaQuery from '@mui/material/useMediaQuery';
// import DashboardFooter from './DashboardFooter';
import {TextField} from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Explore() {
	const mobile = useMediaQuery('(max-width:600px)');
	const navigate = useNavigate();
	const handleExplore =  (e) => {
		navigate('/Editing')
	};
  return (
	  <>
		  <Dashboard_menu />
		  <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'100%':'100%',height:mobile?'812px':'1300px'}}>
    <Paper   sx={{position: 'absolute',margin:'auto',
width:mobile?'72%': '72.96%',
height: mobile?'29%':'45%',backgroundPosition:mobile?'bottom right':'right',backgroundSize:'44%',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',backgroundImage: "url(https://drive.google.com/uc?export=view&id=1XD9BM3-J3wosCLhg_BUoMS7d7SpEbYps)", backgroundRepeat: 'no-repeat',

				borderRadius: '12px'
			  }}>
				  <Grid container md={12} xs={12} sx={{margin:'auto'}}>
					  <Grid item md={11} xs={11} sx={{margin:'auto'}}>
					  <Typography sx={{fontSize:mobile?'14px':"24px",fontWeight:"600",textAlign:"initial",marginTop:mobile?'16px':"26px",lineHeight:"12px"}}>Explore Our Services
				  </Typography>  
					  </Grid>
					  <Grid item md={11} xs={11} sx={{margin:'auto'}}>
					  <Typography sx={{fontSize:mobile?'12px':"18px",textAlign:"initial",marginLeft:mobile?'16px':"0px",marginTop:mobile?'8px':"12px",lineHeight:mobile?"16px":'26px',color:'#333335'}}>We assist you in selecting the finest options for your book. Our services, which include editing, cover design, public relations, social media marketing, and many more, are intended to accentuate your literary experience.
				  </Typography>
					  </Grid>
					  <Grid item md={4} xs={4} sx={{margin:'initial'}}>
				  <Button
              variant="contained"
              color="primary"
				sx={{marginTop:mobile?'8px':'28px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'10px':'16px',borderRadius:'8px',marginLeft:mobile?'16px':"-115px",
								  
							  }}
							  onClick={handleExplore}
            >
              Explore now
					  </Button>
					  </Grid>
				  </Grid> 
				  
			  </Paper>
			  <Paper   sx={{position: 'absolute',margin:'auto',
width:mobile?'72%': '72.96%',
height: mobile?'29%':'35%',backgroundPosition:mobile?'bottom right':'inherit',backgroundSize:'50%',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '400px',backgroundImage: "url(https://drive.google.com/uc?export=view&id=1TrEW5p23rPdr3nTfW6N-yKRkozMCRDDO)", backgroundRepeat: 'no-repeat',

				borderRadius: '12px'
			  }}>
				  <Grid container md={8} xs={12} sx={{margin:'auto'}}>
					  <Grid item md={11} xs={11} sx={{margin:'auto'}}>
					  <Typography sx={{fontSize:mobile?'14px':"24px",fontWeight:"600",textAlign:"initial",marginTop:mobile?'16px':"26px",lineHeight:"12px"}}>COMING SOON !
				  </Typography>  
					  </Grid>
					  <Grid item md={10} xs={11} sx={{margin:'auto'}}>
					  <Typography sx={{fontSize:mobile?'12px':"18px",textAlign:"initial",marginTop:mobile?'8px':"12px",lineHeight:mobile?"16px":'26px',color:'#333335'}}>We will be launching some amazing stuff
				  </Typography>
					  </Grid>
					  <Grid item md={4} xs={4} sx={{margin:'auto'}}>
                      <Grid container md={12}  xs={10} sx={{margin:'auto'}}>
				
              <Grid item md={10} xs={10} >
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Enter your email"
                  type="email"
                  id="email"
				 autoComplete="new-password"
			     size='small'
			   />
				</Grid>
					  </Grid>
					  
				  <Button
              variant="contained"
              color="primary"
				sx={{marginTop:mobile?'8px':'-65px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'10px':'16px',borderRadius:'8px',marginLeft:mobile?'8px':'200px',width:mobile?'100px':'105px',
								 
							  }}
							  onClick={handleExplore}
            >
              Notify me
					  </Button>
					  </Grid>
				  </Grid>  
			  </Paper>
			 {/* <DashboardFooter /> */}
			  </Box>
	  </>
  )
}
export default Explore;
