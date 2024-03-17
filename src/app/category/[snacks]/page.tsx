"use client"
import { DataType } from '@/app/api/route'
import { CustomTypographyList, ListBox } from '@/app/style/home'
import CardComponent from '@/components/Card'
import { Box, Typography} from '@mui/material'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CategoryPage = ({params}:{params:{snacks:string}}) => {
  console.log(params.snacks)
  const path= params.snacks

  const [recipe, setRecipe] = useState<DataType[]>()
  useEffect(()=>{
    const fetchData = async (path: string) => {
      console.log(path,"path1")
      try{
        const response = await fetch(`/api/getSnacks/${path}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        setRecipe(data)
      } catch(err){
        console.log(err, "err in category page");
        
      }
    }
    fetchData(path);
  },[path])
  
  return (
    <Box style={{margin: "84px"}}>
      
     
      {recipe && 
       <Box>
         <Box>
                 <Typography variant="h4" gutterBottom margin={4}>{path} Recipes</Typography>
        

      <Box display={"flex"} gap="55px" flexWrap={"wrap"}>
         {recipe.map((item: DataType) => {
            return <CardComponent {...item} key={item.id} />;
         })}
        </Box> 
     </Box>

       </Box>
       }
      
    </Box>
  )
}

export default CategoryPage
