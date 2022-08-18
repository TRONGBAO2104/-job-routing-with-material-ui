import React, { useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#616161",
      },
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const handleChange = () => {
    console.log("test");
    setDarkMode(!darkMode);
  };
  console.log("asdsd");
  console.log(darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <SearchAppBar
        handleChange={handleChange}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<DetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
