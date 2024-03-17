import { CustomBox } from '@/app/style/home'
import { TextBox } from '@/app/style/home'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HeroSection = ({title, description}: {title: string, description: string}) => {
  return (
    
         <CustomBox>
        <TextBox>
          <Typography gutterBottom variant="h3" fontWeight={700}>
            {title}
            {/* Today&apos;s special recipe */}
          </Typography>
          <Typography variant="h6">
            {" "}
            {description}
            {/* food is the only one thing that every one like.
            <br /> We should knoe the thing which gives us happiness.. */}
          </Typography>
        </TextBox>
        <Box>
          <Image
            src="/home3.jpg"
            alt="home section image"
            width={500}
            height={500}
            title='Recipe of the day'
            priority
          />
        </Box>
      </CustomBox> 

  )
}

export default HeroSection
