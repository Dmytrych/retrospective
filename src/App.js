import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WrapperPage from "./pages/WrapperPage";
import Header from "./components/Header";
import { useContext, useState } from "react";
import SessionPage from "./pages/SessionPage";
import "./App.css"
import "./styles/shared.css"

function App() {
  const [ menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <ThemeProvider>
        <WrapperPage>
          <div className="text-default">
            <Header openMenu={() => setMenuVisible(!menuVisible)}/>
            <div className="display-flex flex-row whole-window">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/session" element={<SessionPage/>}/>
              </Routes>
              <div className="position-absolute sidebar">
                {menuVisible ? <Navbar/> : <></>}
              </div>
            </div>
          </div>
        </WrapperPage>
      </ThemeProvider>
    </>
  );
}

export default App;
