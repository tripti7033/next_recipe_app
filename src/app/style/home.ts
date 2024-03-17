"use client"
import { Box, Typography, styled } from "@mui/material";

export const CustomBox = styled(Box)({
    height: "400px",
    marginTop: "64px",
     backgroundColor: "#F5FEFD",
    // backgroundImage: 'url("/home3.jpg")',
    // backgroundSize: "cover",
    // backgroundPosition: "center",
     display: "flex",
     justifyContent: "space-around",
     alignItems: "center",
    //  position: "relative",
    //  zIndex: -1
    padding: "0px 100px"
    

  })

export const TextBox = styled(Box)({
    width: '70%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
  })

  export const ListBox = styled(Box)({
    display: "flex",
    margin: "80px 120px",
    flexWrap: "wrap",
    gap: "55px"

    
  })

  // export const CustomContentBox = styled(Box)({
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
 
  // })

  export const CustomTypographyList = styled(Typography)({
    textAlign: "center",
    padding: "30px",
    // padding: "50px 100px 0px 100px",
    fontSize: "40px",
    fontFamily: "sans-serif",
    // textDecoration: "underLine",
    backgroundColor: "#8FBC8B",

    color: "white",
    
  })


  