import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WrapperPage from "./pages/WrapperPage";
import Header from "./components/Header";
import "./App.css"
import { useContext, useState } from "react";

function App() {
  const [ menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <ThemeProvider>
        <WrapperPage>
          <Header openMenu={() => setMenuVisible(!menuVisible)}/>
          <div className="display-flex flex-row whole-window">
            {menuVisible ? <Navbar/> : <></>}
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
