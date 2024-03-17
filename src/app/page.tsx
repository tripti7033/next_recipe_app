"use client";
import { Box, Divider, Typography, styled } from "@mui/material";
import Image from "next/image";
import {
  CustomBox,
  CustomTypographyList,
  ListBox,
  TextBox,
} from "./style/home";
import CardComponent from "@/components/Card";
import { useEffect, useState } from "react";
import { DataType, fetchData } from "./api/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { arr } from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
 
  //  const data = await fetchData()
 
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("api/getRecipe");
        const data = await response.json();
        // console.log(data.slice(0,5) );
        setRecipes(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData()
   
  }, []);

  const handleFilter = () =>{
    // redirect("recipe/snacks")
  }

  return (
    <Box>
     <HeroSection title="Today&apos;s special recipe" description="food is the only one thing that every one like.
           We should knoe the thing which gives us happiness..
           "/>
     <Box>
        <CustomTypographyList variant="h4" my={4}>
          Recipes
        </CustomTypographyList>
        <Box display={"flex"} justifyContent={"space-around"} >
          {arr.map((item, i) => (
            <Box position="relative" key={i} >
            <Image
              src={`/pic${i+1}.jpg`}
              alt={item}
              width={250}
              height={200}
              priority
            />
            <Typography
              variant="body1"
              component="span"
              sx={{
                position: "absolute",
                top: "40%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "8px",
                width: "100%",
                textAlign: "center",
              }}

              onClick={handleFilter}
            >
              <Link href={`/category/${item}`}>{item}</Link>
              
            </Typography>
          </Box>
          ))}
          </Box>
        
      </Box>
       <Box>
        {/* <Box sx={{back}}> */}

   \ <CustomTypographyList variant="h4">Latest Recipes</CustomTypographyList>
        {/* </Box> */}
        {/* <Divider/> */}

      <ListBox>
         {recipes.map((item: DataType) => {
            return <CardComponent {...item} key={item.id} />;
         })}
        </ListBox> 
     </Box>
     </Box>
  );
}
