import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";


function Layout() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  

  const theme = createTheme({
    palette : {
      mode : isDarkMode ? 'dark' : 'light'
    }
  })



    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Outlet />
        </ThemeProvider>
        
        {/* <Navbar />
        <Outlet /> */}
      </>
    );
}



export default Layout;