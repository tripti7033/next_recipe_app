"use client"
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

const IdPage = ({params}: {params: {id: string}}) => {
    const [recipe, setRecipe] = useState(null)
    const id = parseInt(params.id)
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(`api/getData/${id}`)
            const data = await response.json();
            console.log(data, "data");  
            setRecipe(data) 
        }
        fetchData();
    },[id])
    // console.log(recipe,"gjhij");
    
  return (
    <Box sx={{marginTop:"64px"}} >Page {params.id}
    {}</Box>
  )
}

export default IdPage