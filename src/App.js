import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WrapperPage from "./pages/WrapperPage";
import "./App.css"

function App() {
  return (
    <>
      <ThemeProvider>
        <WrapperPage>
          <div className="display-flex flex-row">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </WrapperPage>
      </ThemeProvider>
    </>
  );
}

export default App;
