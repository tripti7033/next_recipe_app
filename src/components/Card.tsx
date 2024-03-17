import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CustomCard, CustomCardActions } from '@/app/style/card';
import Link from 'next/link';
// import {  } from "./style/home"
const CardComponent = ({...item}) => {

  const handleClick =()=>{
    
  }
  return (
   
    <CustomCard  variant='outlined'>
        <CardMedia
        component="img"
        height="200"
        title={item.name}
        image={item.image}
        alt={item.name}/>

        <CardContent>
            <Typography variant="h5" gutterBottom>{item.name}</Typography>
            <Typography>serves for: {item.servings}</Typography>
            <Typography>Preperation Time: {item.prepTimeMinutes}</Typography>
            <Rating value={4} readOnly/>
        </CardContent>
        <CustomCardActions disableSpacing>
            <Link href={`/recipe/${item.id}`}>
            <Button>view Recipe</Button>
            </Link>
            <IconButton onClick={handleClick}>
                <FavoriteBorderIcon/>
            </IconButton>
        </CustomCardActions>


    </CustomCard>
  )
}

export default CardComponent