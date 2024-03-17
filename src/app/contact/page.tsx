import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeroSection from '@/components/HeroSection'
import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'

const ContactPage = () => {
  return (
    <Box >
      <HeroSection title='How can we help ?' description='Our customer care agents are available to help users
      with their questions, menu inqiuries. Select your preferred method to connect with us'/>
      
      <Box>
        <Typography textAlign={"center"} variant='h3' margin={8} fontWeight={"bold"}>Customer Support</Typography>
        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} margin={4}>
          <Box display={"flex"} sx={{backgroundColor: "#F5F5F5", width: "50%", padding: "28px"}} justifyContent={"space-between"}>
            <Box  display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <IconButton>
                <HelpOutlineIcon/>
              </IconButton>
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={"bold"}>Support Center</Typography>
              <Typography variant='body1'>Have question? Get quick answer with our FAQs</Typography>
            </Box>
            <Box>
              {/* <Button variant='contained'></Button> */}
              <Button variant="contained">Find Answer</Button>
            </Box>
          </Box>
    
       </Box>
       <Box  display={"flex"} justifyContent={"center"} alignItems={"center"}  margin={4} >
          <Box display={"flex"} sx={{background: "#F5F5F5", width: "50%", padding: "28px"}} justifyContent={"space-between"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <IconButton>
                <MailOutlineIcon/>
              </IconButton>
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={"bold"}>Email us</Typography>
              <Typography variant='body1'>Have question? Get quick answer with our FAQs</Typography>
            </Box>
            <Box>
              {/* <Button variant='contained'></Button> */}
              <Button variant="contained" color='primary'>Find Answer</Button>
            </Box>
          </Box>
        </Box>
        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"}  margin={4} >
          <Box display={"flex"} sx={{background: "#F5F5F5", width: "50%", padding: "28px"}} justifyContent={"space-between"}>
            <Box  display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <IconButton>
                <SmartphoneIcon/>
              </IconButton>
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={"bold"}>Call or Text Us</Typography>
              <Typography variant='body1'>Have question? Get quick answer with our FAQs</Typography>
            </Box>
            <Box>
              {/* <Button variant='contained'></Button> */}
              <Button variant="contained" color='primary'>Find Answer</Button>
            </Box>
          </Box>
        </Box>
    
      </Box>

      </Box>
  )
}

export default ContactPage