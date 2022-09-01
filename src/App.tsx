import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Create from "./pages/Create/Create";
import Notes from "./pages/Notes/Notes";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
