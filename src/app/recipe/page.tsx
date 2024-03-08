"use client"
import React, { useState, useEffect } from 'react'
import { DataType } from '../api/route';
import CardComponent from '@/components/Card';

const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
      const getData = async ()=>{
        try{
          const response = await fetch("api/getRecipe")
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
    <div>
         {recipes.map((item: DataType)=>{
          return(
            <CardComponent {...item} key={item.id}/>
            )
          })}
        
    </div>
  )
}

export default RecipePage