"use client"
import { DataType } from '@/app/api/route';
import { ListAlt } from '@mui/icons-material';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React, { useEffect, useState } from 'react'

const RecipeDetailPage = ({params}: {params: {id:string}}) => {
    const id = parseInt(params.id)
    const [recipe, setrecipe] = useState<DataType>()
    console.log(id);
    useEffect(() =>{
        const fetchRecipeDetail = async (id: number) => {
            try{

                const response = await fetch(`/api/getData/${id}`)
                const data = await response.json();
                console.log(data[0]);
                setrecipe(data[0])
            }
            catch(err){
                console.log(err);
                
            }
        }
        fetchRecipeDetail(id)
    },[id])

    console.log("recipe",recipe);
    

    
  return (
    <Box style={{margin: "104px"}}>
        {/* Page{params.id} */}
      {recipe && 
      <Box>
        <Typography variant='h3' gutterBottom textAlign={"center"}>{recipe.name}</Typography>
        <Box display={"flex"} justifyContent={"space-around"}>
            <Image src={recipe.image} alt={recipe.name} height={400} width={400} priority/>
            <Box marginTop={7} >
                <Typography fontSize={20}>Cooking Time: {recipe.cookTimeMinutes}</Typography>
                <Typography fontSize={20} >Preparation time: {recipe.prepTimeMinutes}</Typography>
                <Typography fontSize={20} >CaloriesPerServing: {recipe.caloriesPerServing
}</Typography>
                <Typography fontSize={20} >servings: {recipe.servings}</Typography>
                <Typography fontSize={20} >cuisine: {recipe.cuisine}</Typography>
                <Typography fontSize={20} >difficulty: {recipe.difficulty}</Typography>
                <Typography fontSize={20} >rating: {recipe.rating}</Typography>
                <Typography fontSize={20} >reviewCount: {recipe.reviewCount}</Typography>
                {/* <Typography fontSize={20} >mealType: */}
                 {/* {recipe.mealType.map((item, i) => (item ))}  */}
                 {/* </Typography> */}




            </Box>
        </Box>
        
            <Box marginTop={7}>
                <Typography variant='h4' gutterBottom>Ingredients :-</Typography>
                <List >
                    {recipe.ingredients.map((item, i) =>(
                    
                    <ListItem disablePadding key={i}>
                        <ListItemIcon>
                            {/* <FiberManualRecordIcon/> */}
                            <ArrowRightIcon/>
                            {/* {i} */}
                        </ListItemIcon>
                        <ListItemText primary={item}/>
                    </ListItem>
                    
                    ))}

                </List>

            </Box>
            <Box marginTop={5}>
                <Typography variant='h4'  gutterBottom>Instruction :-</Typography>
                <List >
                    {recipe.instructions.map((item, i) =>(
                    
                    <ListItem disablePadding key={i}>
                        <ListItemIcon>
                            {/* <FiberManualRecordIcon/> */}
                            <ArrowRightIcon/>
                            {/* {i} */}
                        </ListItemIcon>
                        <ListItemText primary={item}/>
                    </ListItem>
                    
                    ))}

                </List>

            </Box>
      </Box>
      }
    </Box>
  )
}

export default RecipeDetailPage
