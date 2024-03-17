"use client"
import { Card, CardActions, styled } from "@mui/material";

export const CustomCard = styled(Card)({
 maxWidth: "300px",
 borderRadius: "20px",
 transition: "boxShadow 0.3s ease",
 
 '&:hover':{
   boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.6)",

 }

})
export const CustomCardActions = styled(CardActions)({
   display: "flex",
   justifyContent: "space-between"
    
   })