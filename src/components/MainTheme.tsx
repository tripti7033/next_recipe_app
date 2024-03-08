import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
    // palette:{
    //     primary:{
    //         main:'#ffffff'
    //     }

    // },
    components:{
        MuiAppBar:{
            styleOverrides:{
                root:{
                    backgroundColor: "white",
                    color: "black",
                    height: "64px"
                }
            }
        },
        MuiToolbar: {
            styleOverrides:{
                root:{
                    display: "flex",
                    justifyContent: "space-between"
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    border: "1px solid black",
                    color: "black",
                }
            }
        },
        
    
    }
})