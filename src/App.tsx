import Clock from "./components/Clock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import HomePage from "./pages/HomePage";
import StartUp from "./pages/StartUpPage";
import { ThemeProvider } from "./providers/themeProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import wallpaper from "./assets/wallpaper.jpg";

function App() {
  return (
    <Router>
      <div
        className="h-screen w-screen"
        style={{
          backgroundImage: `url(${wallpaper})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="glass">
          <ThemeProvider>
            <ThemeSwitcher />
            <Clock />
            <Routes>
              <Route path="/" element={<StartUp />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </ThemeProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
