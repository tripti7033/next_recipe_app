import { CustomBox, CustomBoxLink, MainBox } from "@/app/style/footer";
import {
  Box,
  Divider,
  IconButton,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <MainBox>
      <CustomBox>
        <Box>
          <Box display={"flex"} alignItems={"center"}>
          <IconButton>
            <LocalDiningIcon />
          </IconButton>
          <Typography variant="h6">Recipe Adda</Typography>
          </Box>
          <address>
            963 main road <br />
            Bommanahalli, Banglore
            <br />
            contact us 893682238
          </address>
        </Box>
        <Box>
          <Typography variant="h6">Important Links</Typography>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
            <Link href="/category">
              <li>Category</li>
            </Link>
          </ul>
          {/* <FormControl>
          <FormLabel> join our community</FormLabel>
          <TextField variant='filled'/>
        </FormControl> */}
        </Box>
        <Box></Box>
      </CustomBox>
      <Divider />
      <CustomBoxLink>
        <Typography>copyright@RecipeAdda,2024</Typography>
      </CustomBoxLink>
    </MainBox>
  );
};

export default Footer;
