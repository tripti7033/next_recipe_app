"use client";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
// import { useStyles } from "./header.styles";
import { MainTheme } from "./MainTheme";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import { CustomBox, InputTypography, LogoBox , ListTypography} from "@/app/style/header";
import { useRouter } from "next/navigation";


export let arr: string[] = ["snacks", "breakfast","dinner","lunch"]
const Header = () => {
  // const classes1 = useStyles()
  const router = useRouter()
  const loggedIn = true;
  const [menu, setMenu] = useState<null | HTMLElement>(null)
  const open = Boolean(menu);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) =>{
    setMenu(event.currentTarget);
  }
  const handleClose = () =>{
    setMenu(null);
  }

  const handleMenuItem = (item: string) => {
    router.push(`/category/${item}`);
    setMenu(null);
  }

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
                sx={{color: "#2a6e0d"}}
              >
                <IconButton sx={{color: "#2a6e0d"}}>
                  <LocalDiningIcon />
                </IconButton>
                <Typography variant="h6" component="div" fontWeight={700}>
                  Recipe Adda
                </Typography>
              </LogoBox>
            </Box>

              <InputTypography placeholder="search here" variant="outlined"/>
            
             <CustomBox>
              <ListTypography><Link href="/">Home</Link></ListTypography>
              <ListTypography><Link href="about">About</Link></ListTypography>

              <ListTypography><Link href="contact">Contact </Link></ListTypography>

              <ListTypography><Link href="#" onMouseOver={handleClick} >Category</Link></ListTypography>

              <Menu
        anchorEl={menu}
        open={open}
        onClose={handleClose}
      >
        {arr.map((item,i )=> (
         <MenuItem onClick={() => handleMenuItem(item)} key={i}>{item}</MenuItem>
        ))}
      </Menu>

              {/* <ListTypography><Link href="favourite">Favourite</Link></ListTypography> */}
            </CustomBox>

          {/* {loggedIn ? (<Button>Login </Button>) : ( <Button>Logout</Button>)} */}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

export default Header;
