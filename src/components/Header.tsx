"use client";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
// import { useStyles } from "./header.styles";
import { MainTheme } from "./MainTheme";
import { NodeNextRequest } from "next/dist/server/base-http/node";

const Header = () => {
  // const classes1 = useStyles()
  const loggedIn = true;

  const LogoBox = styled(Link)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  })
  const CustomBox = styled(Box)({
    display: "flex",
    gap: "20px",
  });
  const InputTypography = styled(TextField)({
        width: "350px",
        border: "1px solid black",
        borderRadius: "5px",

  "& .MuiInputBase-formControl":{
    height:"40px",
  }
  })
  return (
    <Box>
      <ThemeProvider theme={MainTheme}>
        <AppBar>
          <Toolbar
          //  className={classes1.root}
          >
            <Box>
              <LogoBox
                href="/"
                // className={classes1.logo}
              >
                <IconButton>
                  <LocalDiningIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                  Recipe Adda
                </Typography>
              </LogoBox>
            </Box>

              <InputTypography placeholder="search here" variant="outlined"/>
            
             <CustomBox>
              <Typography><Link href="/">Home</Link></Typography>
              <Typography><Link href="home">About</Link></Typography>

              <Typography><Link href="contact">Contact </Link></Typography>

              <Typography><Link href="category">Category</Link></Typography>
              <Typography><Link href="favourite">Favourite</Link></Typography>
            </CustomBox>

          {/* {loggedIn ? (<Button>Login </Button>) : ( <Button>Logout</Button>)} */}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

export default Header;
