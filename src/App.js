import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
