import HeroSection from '@/components/HeroSection'
import { Box, Typography } from '@mui/material'
import React from 'react'

const AboutPage = () => {
  return (
    <Box >
      <HeroSection title='About Recipe Adda' description='The Taste of India'/>
      

      <Box>
        <Typography></Typography>
        <Typography fontSize={"22px"} margin={12} fontFamily={'serif'}> <Box component={"span"} fontWeight={"bold"}> Welcome to our recipe Adda!</Box> We are passionate about cooking and sharing delicious recipes with the world. Whether you are a seasoned chef or just starting out in the kitchen, our project is here to inspire you to create mouthwatering dishes for yourself, your family, and your friends</Typography>
      </Box>

      <Box mx={13}>
        <Typography variant='h4' gutterBottom sx={{textDecoration: "underline"}}>OUR MISSION :-</Typography>
        <Typography fontSize={"22px"} fontFamily={'serif'}>Our mission is to provide a comprehensive collection of recipes that cater to all tastes, dietary preferences, and cooking skill levels. We believe that cooking should be fun, enjoyable, and accessible to everyone. That is why we have curated a diverse range of recipes from around the globe, ensuring there is something for everyone to enjoy.</Typography>
      </Box>

      </Box>
  )
}

export default AboutPage