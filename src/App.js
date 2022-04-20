import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WrapperPage from "./pages/WrapperPage";
import Header from "./components/Header";
import "./App.css"
import { useContext, useState } from "react";
import SessionPage from "./pages/SessionPage";

function App() {
  const [ menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <ThemeProvider>
        <WrapperPage>
          <div className="text-default">
            <Header openMenu={() => setMenuVisible(!menuVisible)}/>
            <div className="display-flex flex-row whole-window">
              {menuVisible ? <Navbar/> : <></>}
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/session" element={<SessionPage/>}/>
              </Routes>
            </div>
          </div>
        </WrapperPage>
      </ThemeProvider>
    </>
  );
}

export default App;
