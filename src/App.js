// import { Routes } from "react-router-dom";
import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Symptoms from "./components/Symptoms/Symptoms";
import Action from "./components/Action/Action";
import News from "./components/News/News";
import Doctors from "./components/Doctors/Doctors";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        
        <CssBaseline />
        <div className="app">
          <section id="home" ><Navbar /><Hero /></section>
          <section id="about" ><About /></section>
          <section ><Symptoms /></section>
          <section id="action"><Action /></section>
          <section id="news" ><News /></section>
          <section id="doctors" ><Doctors /></section>          
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
