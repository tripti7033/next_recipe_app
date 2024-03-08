"use client"

import { styled, Box } from "@mui/material"

export const MainBox = styled(Box)({
    height: "300px",
   backgroundColor: "#F5FEFD",
})

export const CustomBox = styled(Box)({
     display: "flex",
     height: "90%",
     justifyContent: "space-around",
     alignItems: "center",
     marginTop: "50px"
})

export const CustomBoxLink = styled(Box)({
    textAlign: "center",
    color: "grey"
})