"use client"
import { Box, Divider, Typography, styled } from "@mui/material";
import Image from "next/image";
import { CustomBox, CustomTypographyList, ListBox, TextBox, } from "./style/home";
import CardComponent from "@/components/Card";
import { useEffect, useState } from "react";
import { DataType } from "./api/route";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const response = await fetch('api/getRecipe')
        const data = await response.json()
        // console.log(data.slice(0,5) );
        setRecipes(data);

      }catch(err) {
        console.log(err);
        
      }
     
    }
    getData()

 },[])
 
  return (
    <Box>
      <CustomBox>
       <TextBox>
        <Typography gutterBottom variant="h3">Today&apos;s special recipe</Typography>
        <Typography variant="h6"> food is the only one thing that every one like.<br/> We should knoe the thing which gives us happiness..</Typography>
       </TextBox>
       <Box>
        <Image src="/home3.jpg" alt="home section image" width={500} height={500} priority/>
       </Box>
      </CustomBox>
      <Box>
        
        <CustomTypographyList variant="h4">Latest Recipes</CustomTypographyList>
        {/* <Divider/> */}
  <ListBox>
        {recipes.map((item: DataType)=>{
          return(
            <CardComponent {...item} key={item.id}/>
            )
          })}
          </ListBox>

      </Box>

    </Box>
  );
}
