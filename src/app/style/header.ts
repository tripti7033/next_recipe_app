
import { Box, TextField, Typography, styled } from "@mui/material";
import Link from "next/link";

export const LogoBox = styled(Link)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  })
  export const CustomBox = styled(Box)({
    display: "flex",
    gap: "20px",
    
  });
  export const InputTypography = styled(TextField)({
        width: "350px",
        border: "1px solid black",
        borderRadius: "5px",

  "& .MuiInputBase-formControl":{
    height:"40px",

  }
  })

  export const ListTypography = styled(Typography)({
    fontFamily: "sans-serif",
    fontSize: "18px",
    padding: "8px",
    // transition: "transform 0.3s",
  
    '&:hover': {
        // transform: "scale(1.1)", // Example of hovering effect
        background: "#2a6e0d",
        color: "white",
        borderRadius: "5px",
        
        
      },
  })