import HomePage from "./pages/HomePage";
import StartUp from "./pages/StartUpPage";
import { ThemeProvider } from "./providers/themeProvider";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [fade, setFade] = useState<boolean>(false);
  const navigate = useNavigate();

  window.onpopstate = () => {
    setFade(false);
    navigate("/");
  };

  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<StartUp setFade={setFade} fade={fade} />} />
          <Route path="/home" element={<HomePage fade={fade} />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
